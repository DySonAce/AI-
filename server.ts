import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Initialize Gemini Client
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("GEMINI_API_KEY not found in environment variables. Server will run with mocked translation capability.");
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: Translate Text
  app.post("/api/translate", async (req, res) => {
    const { text, sourceLang, targetLang, engine } = req.body;

    if (!text || text.trim() === "") {
      return res.json({ translated: "" });
    }

    // Fallback if API key is not present
    if (!ai) {
      return res.json({
        translated: `[模擬譯文 (${engine || 'Gemini'}): ${sourceLang} -> ${targetLang}]\n${text}\n\n(注意：偵測到系統秘密中尚未設定或載入 GEMINI_API_KEY，正在使用本地端測試模式。)`
      });
    }

    try {
      const prompt = `您是一個專業的、高精密實時數字本地化與翻譯引擎。請將以下文本從「${sourceLang}」翻譯至「${targetLang}」：

文本內容：
${text}

規定：
1. 僅輸出翻譯後的最終內容。
2. 嚴禁夾雜任何您的分析、自我介紹、禮貌問候、以及「以下是翻譯：」等前置詞或後置備註。
3. 保持原文本的所有段落格式、代碼框、符號及排版形式。`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are a professional, high-performance translation and localization engine. Translate the source text accurately to the target language. Keep any formatting and structure unchanged. Do not state anything other than the exact translation.",
        }
      });

      const translatedText = response.text || "";
      res.json({ translated: translatedText });
    } catch (err: any) {
      console.error("Translation API Error:", err);
      res.status(500).json({ error: err.message || "翻譯失敗" });
    }
  });

  // API Route: Python Client Code Integration Guide Data
  app.get("/api/python-integration", (req, res) => {
    res.json({
      setupSteps: [
        "安裝官方 SDK: pip install google-genai",
        "設定環境變量: export GEMINI_API_KEY='您的密鑰'",
        "執行 python translate.py 進行翻譯"
      ],
      pythonCode: `from google import genai
import os

def translate_text(text: str, source_lang: str, target_lang: str) -> str:
    # 讀取環境變數中的金鑰
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        raise ValueError("請先設定 GEMINI_API_KEY 環境變數")
        
    client = genai.Client(api_key=api_key)
    
    prompt = f"請將以下文本從 {source_lang} 翻譯成 {target_lang}。僅輸出譯後純文本：\\n\\n{text}"
    
    response = client.models.generate_content(
        model='gemini-2.5-flash',
        contents=prompt
    )
    return response.text

# 測試用例
if __name__ == "__main__":
    original = "Hello World! This is a real-time cyber translator integrated with Python."
    translatedStr = translate_text(original, "English", "Traditional Chinese")
    print("原文字：", original)
    print("譯後文：", translatedStr)
`
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Cyber-Server] AI Translator runs on port ${PORT}`);
  });
}

startServer();
