#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
AI Translator - Python 整合與對接範例
這份腳本展示了兩種與本翻譯系統結合的 Python 實作方式：
1. 【直接調用】使用 Google 官方最新的 google-genai SDK 進行翻譯
2. 【客戶端對接】透過 HTTP 請求調用您剛才建立的 Express 翻譯伺服器 API
"""

import os
import sys
import json

# =====================================================================
# 方案 A：使用最新的 google-genai 官方 SDK
# 安裝指令：pip install google-genai
# =====================================================================
def translate_via_sdk(text, source_lang="英文", target_lang="繁體中文"):
    print("\n--- 正在使用 [方案 A: Google GenAI Python SDK] 進行翻譯 ---")
    try:
        from google import genai
    except ImportError:
        print("[資訊] 未偵測到 google-genai 套件，請執行：pip install google-genai")
        return None

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("[警告] 未設定 GEMINI_API_KEY 環境變數。請在終端機輸入：export GEMINI_API_KEY='your_key'")
        return None

    # 初始化最新的 Python SDK 用戶端
    client = genai.Client(api_key=api_key)
    
    prompt = f"""您是一個專業的、高精密實時數字本地化與翻譯引擎。請將以下文本從「{source_lang}」翻譯至「{target_lang}」：

文本內容：
{text}

規定：
1. 僅輸出翻譯後的最終內容。
2. 嚴禁夾雜任何分析、自我介紹或禮貌問候。
3. 保持原文本的所有段落格式及排版形式。"""

    try:
        # 使用推薦的 gemini-2.5-flash 作為輕量文字任務
        response = client.models.generate_content(
            model='gemini-2.5-flash',
            contents=prompt,
        )
        return response.text
    except Exception as e:
        print(f"[錯誤] SDK 呼叫失敗: {e}")
        return None


# =====================================================================
# 方案 B：呼叫剛才建立的 Node.js/Express 翻譯伺服器 API
# 安裝指令：pip install requests
# =====================================================================
def translate_via_local_server(text, source_lang="英文 [English]", target_lang="繁體中文 [Traditional Chinese]"):
    print("\n--- 正在使用 [方案 B: 呼叫 Node.js Express 伺服器 API] 進行翻譯 ---")
    try:
        import requests
    except ImportError:
        print("[資訊] 未偵測到 requests 套件，請執行：pip install requests")
        return None

    # 本機伺服器的預設連接埠為 3000
    server_url = "http://localhost:3000/api/translate"
    payload = {
        "text": text,
        "sourceLang": source_lang,
        "targetLang": target_lang,
        "engine": "Google 翻譯"
    }
    headers = {
        "Content-Type": "application/json"
    }

    try:
        response = requests.post(server_url, json=payload, headers=headers, timeout=10)
        if response.status_code == 200:
            result = response.json()
            return result.get("translated")
        else:
            print(f"[錯誤] 伺服器返回狀態碼: {response.status_code}, 內容: {response.text}")
            return None
    except Exception as e:
        print(f"[錯誤] 無法連線至 Express 伺服器: {e}")
        print("[指示] 請確保您的 React/Express 應用程式正在運行中（使用 npm run dev）。")
        return None


if __name__ == "__main__":
    demo_text = "Welcome to the future of translation. Artificial intelligence combined with lightweight servers allows instant global communication without barriers."
    
    print("=" * 60)
    print(" AI Translator - Python 整合測試點")
    print("=" * 60)
    print(f"原文字：\n{demo_text}")
    
    # 嘗試呼叫 Express 本機伺服器 (方案 B)
    translated_resp = translate_via_local_server(demo_text)
    if translated_resp:
        print(f"\n譯後文 (來自本機伺服器)：\n{translated_resp}")
    else:
        # 如果本機伺服器未開啟，說明如何直接使用環境中的 SDK
        print("\n提示：如果您已開啟網頁服務，請在 npm run dev 動態運作時呼叫本機伺服器。")
        print("我們接著嘗試直接調用 Google Python SDK (若已安裝):")
        sdk_resp = translate_via_sdk(demo_text)
        if sdk_resp:
            print(f"\n譯後文 (來自 Google SDK)：\n{sdk_resp}")
    
    print("\n" + "=" * 60)
    print("如何執行：")
    print("1. 啟動伺服器：npm run dev")
    print("2. 在終端機執行此 Python 檔案：python3 translate.py")
    print("=" * 60)
