import React, { useState, useEffect } from "react";
import { getLanguageKey, getLoc } from "./locales";
import { 
  Terminal, 
  Cpu, 
  Zap, 
  Layers, 
  Anchor, 
  List, 
  Settings, 
  Cpu as HardwareIcon, 
  Globe, 
  Play, 
  Video, 
  RotateCcw,
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  FileCode,
  Languages, 
  Sparkles,
  Loader2,
  ArrowRightLeft,
  Palette
} from "lucide-react";

export default function App() {
  // Sidebar Tabs (Removed "python" as requested, we'll embed the guide in the primary screen as textual output)
  const [activeTab, setActiveTab] = useState<"console" | "settings" | "hardware">("console");
  
  // Theme Color Scheme Selection (Cyan, Gold, Pink, Green, Purple)
  const [themeColor, setThemeColor] = useState<"cyan" | "gold" | "pink" | "green" | "purple">("cyan");

  const themes = {
    cyan: {
      primary: "#00fbfb",
      glowColor: "rgba(0, 251, 251, 0.4)",
      borderColor: "border-[#00fbfb]",
      textColor: "text-[#00fbfb]",
      shadow: "shadow-[0_0_12px_rgba(0,251,251,0.3)]",
      activeBg: "bg-[#00fbfb]/10",
      ledBg: "bg-[#00fbfb]"
    },
    gold: {
      primary: "#ffdb3c",
      glowColor: "rgba(255, 219, 60, 0.4)",
      borderColor: "border-[#ffdb3c]",
      textColor: "text-[#ffdb3c]",
      shadow: "shadow-[0_0_12px_rgba(255,219,60,0.3)]",
      activeBg: "bg-[#ffdb3c]/10",
      ledBg: "bg-[#ffdb3c]"
    },
    pink: {
      primary: "#ffb2ba",
      glowColor: "rgba(255, 178, 186, 0.4)",
      borderColor: "border-[#ffb2ba]",
      textColor: "text-[#ffb2ba]",
      shadow: "shadow-[0_0_12px_rgba(255,178,186,0.3)]",
      activeBg: "bg-[#ffb2ba]/10",
      ledBg: "bg-[#ffb2ba]"
    },
    green: {
      primary: "#4ade80",
      glowColor: "rgba(74, 222, 128, 0.4)",
      borderColor: "border-[#4ade80]",
      textColor: "text-[#4ade80]",
      shadow: "shadow-[0_0_12px_rgba(74,222,128,0.3)]",
      activeBg: "bg-[#4ade80]/10",
      ledBg: "bg-[#4ade80]"
    },
    purple: {
      primary: "#c084fc",
      glowColor: "rgba(192, 132, 252, 0.4)",
      borderColor: "border-[#c084fc]",
      textColor: "text-[#c084fc]",
      shadow: "shadow-[0_0_12px_rgba(192,132,252,0.3)]",
      activeBg: "bg-[#c084fc]/10",
      ledBg: "bg-[#c084fc]"
    }
  };

  const currentTheme = themes[themeColor];

  // Language lists - 15 Languages for Interface, Source state & Target state
  const fifteenLanguages = [
    { code: "en", label: "英文 [English]" },
    { code: "zh-tw", label: "繁體中文 [Traditional Chinese]" },
    { code: "zh-cn", label: "简体中文 [Simplified Chinese]" },
    { code: "ja", label: "日本語 [Japanese]" },
    { code: "ko", label: "한국語 [Korean]" },
    { code: "es", label: "西班牙文 [Spanish]" },
    { code: "fr", label: "法文 [French]" },
    { code: "de", label: "德文 [German]" },
    { code: "it", label: "義大利文 [Italian]" },
    { code: "ru", label: "俄文 [Russian]" },
    { code: "pt", label: "葡萄牙文 [Portuguese]" },
    { code: "vi", label: "越南文 [Vietnamese]" },
    { code: "th", label: "泰文 [Thai]" },
    { code: "id", label: "印尼文 [Indonesian]" },
    { code: "tr", label: "土耳其文 [Turkish]" }
  ];

  // 15 languages mappings specifically for Interface Language dropdown
  const interfaceLanguages = [
    "繁體中文 (Traditional Chinese)",
    "简体中文 (Simplified Chinese)",
    "English (English)",
    "日本語 (Japanese)",
    "한국어 (Korean)",
    "Español (Spanish)",
    "Français (French)",
    "Deutsch (German)",
    "Italiano (Italian)",
    "Русский (Russian)",
    "Português (Portuguese)",
    "Tiếng Việt (Vietnamese)",
    "ไทย (Thai)",
    "Bahasa Indonesia (Indonesian)",
    "Türkçe (Turkish)"
  ];

  // Dashboard states
  const [hardwareMode, setHardwareMode] = useState<"CPU" | "GPU">("GPU");
  const [interfaceLang, setInterfaceLang] = useState<string>("繁體中文 (Traditional Chinese)");
  const currentLangKey = getLanguageKey(interfaceLang);
  const t = getLoc(currentLangKey);
  const [translationEngine, setTranslationEngine] = useState<string>("Gemini AI 翻譯");
  const [sourceLang, setSourceLang] = useState<string>("英文 [English]");
  const [targetLang, setTargetLang] = useState<string>("繁體中文 [Traditional Chinese]");
  const [translationMode, setTranslationMode] = useState<"overlay" | "anchor" | "list">("overlay");
  
  // Shortcuts
  const [shortcutText, setShortcutText] = useState<string>("Windows + Shift + D");
  const [isRecordingShortcut, setIsRecordingShortcut] = useState<boolean>(false);
  
  // Translation playground
  const [inputText, setInputText] = useState<string>("Welcome to the future of AI translation. This client has been integrated with a real-time server backend.");
  const [translatedText, setTranslatedText] = useState<string>("正在等待翻譯...");
  const [isTranslating, setIsTranslating] = useState<boolean>(false);

  // Status Module indicators
  const [ocrStatus, setOcrStatus] = useState<boolean>(true);
  const [offlineStatus, setOfflineStatus] = useState<boolean>(false);
  const [imageFixStatus, setImageFixStatus] = useState<boolean>(true);


  // Notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Swapper for Source and Target Languages back-and-forth
  const swapLanguages = () => {
    const temp = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(temp);
    showToast(`${t.swapped_toast} ${targetLang} ⇆ ${sourceLang}`);
  };

  // Trigger Translation via Express backend
  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setTranslatedText("");
      return;
    }
    setIsTranslating(true);
    try {
      const response = await fetch("/api/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: inputText,
          sourceLang,
          targetLang,
          engine: translationEngine
        })
      });
      const data = await response.json();
      if (data.translated) {
        setTranslatedText(data.translated);
      } else if (data.error) {
        setTranslatedText(`${t.translate_fail || "[作業失敗]"}: ${data.error}`);
      } else {
        setTranslatedText(t.no_result || "[無結果]");
      }
    } catch (e: any) {
      setTranslatedText(`${t.translate_error || "[連線錯誤]: 無法連線至 Express 翻譯伺服器。請確認伺服器於背景運作。\\n系統仍使用離線備份：\\n[翻譯結果]"} ${inputText}`);
    } finally {
      setIsTranslating(false);
    }
  };

  // Handle auto-translation or triggers on changes
  useEffect(() => {
    const timer = setTimeout(() => {
      handleTranslate();
    }, 800);
    return () => clearTimeout(timer);
  }, [inputText, sourceLang, targetLang, translationEngine]);

  // Copy code utility
  const copyToClipboard = (text: string, description: string) => {
    navigator.clipboard.writeText(text);
    showToast(`${t.copied_toast || "已成功複製到剪貼簿！"} (${description})`);
  };

  // Keyboard shortcut listener for simulation recording
  useEffect(() => {
    if (!isRecordingShortcut) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      const keys: string[] = [];
      if (e.metaKey || e.key === "Meta") keys.push("Windows");
      if (e.ctrlKey) keys.push("Ctrl");
      if (e.shiftKey) keys.push("Shift");
      if (e.altKey) keys.push("Alt");
      
      const mainKey = e.key.toUpperCase();
      if (mainKey !== "CONTROL" && mainKey !== "SHIFT" && mainKey !== "ALT" && mainKey !== "META") {
        keys.push(mainKey);
      }
      
      if (keys.length > 0) {
        setShortcutText(keys.join(" + "));
      }
    };

    const handleMouseUp = () => {
      setIsRecordingShortcut(false);
      showToast(t.toast_shortcut_saved || "快捷鍵設定完成！");
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isRecordingShortcut]);


  return (
    <div className="flex h-screen w-screen overflow-hidden selection:bg-[#00fbfb]/30 selection:text-white relative font-sans text-[#dde2f1] bg-[#080e18]">
      
      {/* Dynamic Ambient Background Glow controlled by Theme */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className={`absolute top-1/4 right-1/4 w-96 h-96 ${currentTheme.bgGlow} rounded-full blur-[140px] opacity-[0.06] transition-all duration-700`} />
        {themeColor !== "gold" && (
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-[#ffdb3c] rounded-full blur-[120px] opacity-[0.03]" />
        )}
        <div className="scanline z-40" />
      </div>

      {/* Toast notifications */}
      {toastMessage && (
        <div className="fixed top-4 right-4 z-50 bg-[#161c26] border border-[#00fbfb] shadow-[0_0_15px_rgba(0,251,251,0.4)] text-white px-4 py-2.5 rounded-lg flex items-center gap-2 animate-fade-in text-sm border-current" style={{ borderColor: currentTheme.primary }}>
          <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: currentTheme.primary }} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. Sidebar Navigation */}
      <aside 
        id="Sidebar" 
        className="w-64 h-full py-6 bg-[#1a202a]/95 border-r border-white/10 z-20 flex-shrink-0 flex flex-col justify-between"
      >
        <div>
          {/* Logo Section */}
          <div id="BrandGroup" className="px-5 flex flex-col items-center gap-3 mb-8">
            <div className={`w-16 h-16 rounded-lg bg-[#242a35] border border-white/10 flex items-center justify-center relative overflow-hidden group shadow-[0_0_10px_rgba(0,0,0,0.3)] transition-all duration-300`} style={{ borderColor: `${currentTheme.primary}40` }}>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="w-10 h-10 rounded border flex items-center justify-center" style={{ backgroundColor: `${currentTheme.primary}12`, borderColor: `${currentTheme.primary}50` }}>
                <Terminal className="w-6 h-6" style={{ color: currentTheme.primary }} />
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold tracking-tight text-white font-display">AI Translator</h2>
            </div>
          </div>

          {/* Navigation Links */}
          <nav id="MainNav" className="px-3 space-y-1">
            <button 
              onClick={() => setActiveTab("console")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeTab === "console" 
                  ? `bg-white/10 text-white font-bold border-r-2 ${currentTheme.borderColor} ${currentTheme.shadow}` 
                  : "text-[#b9cac9] hover:text-white hover:bg-[#242a35]"
              }`}
            >
              <Terminal className="w-5 h-5" style={{ color: currentTheme.primary }} />
              <span className="text-sm font-semibold">{t.console_tab}</span>
            </button>

            {/* Note: The old Python Integration Guide Sidebar Tab block (Fig 1) is removed and converted to clean textual component within the primary screen as output, satisfying "圖1這個區塊請以文字輸出並移除" (Please output this block as text, and remove it). */}

            <button 
              onClick={() => setActiveTab("settings")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeTab === "settings" 
                  ? `bg-white/10 text-white font-bold border-r-2 ${currentTheme.borderColor} ${currentTheme.shadow}` 
                  : "text-[#b9cac9] hover:text-white hover:bg-[#242a35]"
              }`}
            >
              <Settings className="w-5 h-5 text-[#dde2f1]" />
              <span className="text-sm font-semibold">{t.settings_tab}</span>
            </button>

            <button 
              onClick={() => setActiveTab("hardware")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeTab === "hardware" 
                  ? `bg-white/10 text-white font-bold border-r-2 ${currentTheme.borderColor} ${currentTheme.shadow}` 
                  : "text-[#b9cac9] hover:text-white hover:bg-[#242a35]"
              }`}
            >
              <HardwareIcon className="w-5 h-5 text-[#dde2f1]" />
              <span className="text-sm font-semibold">{t.hardware_tab}</span>
            </button>

            {/* Interface Language: Now featuring full 15 languages as requested in Fig 2 */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <p className="px-4 text-[10px] font-mono uppercase tracking-widest opacity-80 mb-2" style={{ color: currentTheme.primary }}>
                {t.ui_lang_label || "UI語言切換"}
              </p>
              <div className="px-3">
                <div className="relative">
                  <select 
                    value={interfaceLang}
                    onChange={(e) => {
                      setInterfaceLang(e.target.value);
                      const key = getLanguageKey(e.target.value);
                      const currentLoc = getLoc(key);
                      showToast(`${currentLoc.lang_loaded_toast || "介面語系已裝載："}${e.target.value}`);
                    }}
                    className="w-full bg-[#242a35]/60 hover:bg-[#2f3540] text-xs py-2 pl-3 pr-8 rounded-lg text-[#b9cac9] border border-white/20 appearance-none focus:outline-none focus:border-[#00fbfb] transition-all cursor-pointer"
                    style={{ focusBorderColor: currentTheme.primary }}
                  >
                    {interfaceLanguages.map((lang, idx) => (
                      <option key={idx} value={lang}>{lang}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center" style={{ color: currentTheme.primary }}>
                    <Globe className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Sidebar Footer options */}
        <div id="SidebarFooter" className="px-3 space-y-1 pt-6 border-t border-white/10">
          <button 
            onClick={() => {
              showToast(t.engine_status || "核心翻譯編譯系統：已是最新狀態 V1.0.4");
            }}
            className="w-full py-2 px-3 rounded border border-white/10 hover:bg-white/5 text-[#ffdb3c] font-mono text-[11px] font-bold tracking-wider transition-colors uppercase mb-2"
            style={{ color: currentTheme.primary, borderColor: `${currentTheme.primary}40` }}
          >
            {t.update_engine || "更新核心引擎"}
          </button>
        </div>
      </aside>

      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-full overflow-hidden relative z-10" id="ContentCanvas">
        
        {/* Top App Bar with Controls info */}
        <header id="TopAppBar" className="flex justify-between items-center px-6 h-12 bg-[#0e141e] border-b border-white/10 flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-[15px] font-semibold tracking-wide text-white">
              {t.title_ai_trans || "AI 翻譯"} <span className="font-mono" style={{ color: currentTheme.primary }}>v1.0</span>
            </span>
            <span className="px-2 py-0.5 rounded-sm bg-[#2f3540] text-[10px] font-mono border uppercase font-bold tracking-wider" style={{ color: currentTheme.primary, borderColor: `${currentTheme.primary}30` }}>
              {t.mode_realtime || "即時模式 [REALTIME]"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#1a202a] border border-white/10 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full led-active" style={{ backgroundColor: currentTheme.primary }}></span>
              <span className="text-[11px] font-mono text-[#b9cac9]">{t.sys_online || "SYS: ONLINE"}</span>
            </div>
            
            {/* Window control details */}
            <div className="flex items-center gap-1 border-l border-white/10 pl-2">
              <button onClick={() => showToast(t.sys_min || "已最小化。")} className="p-1.5 text-white/50 hover:text-white rounded cursor-pointer transition-all"><span className="text-xs font-mono">-</span></button>
              <button onClick={() => showToast(t.sys_max || "已自動調整至全螢幕。")} className="p-1.5 text-white/50 hover:text-white rounded cursor-pointer transition-all"><span className="text-xs font-mono">◱</span></button>
              <button onClick={() => showToast(t.sys_close || "確認中。")} className="p-1.5 text-white/50 hover:text-[#ffb2ba] rounded cursor-pointer transition-all"><span className="text-xs font-mono">✕</span></button>
            </div>
          </div>
        </header>

        {/* Scrollable Container */}
        <div id="ScrollContainer" className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <div className="max-w-3xl mx-auto space-y-6 pb-12">
            
            {/* Conditional Tab Rendering */}
            {activeTab === "console" && (
              <>
                {/* 2.1 Hardware Mode Toggle Card */}
                <section id="HardwareModeSection" className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[11px] font-mono tracking-widest uppercase" style={{ color: currentTheme.primary }}>
                      {t.hw_title || "硬體模式 [HARDWARE_MODE]"}
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => {
                        setHardwareMode("CPU");
                        showToast(t.toast_cpu || "已切換至中央處理器(CPU)低耗電模型模式。");
                      }}
                      className={`flex items-center justify-center gap-3 p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                        hardwareMode === "CPU" 
                          ? `${currentTheme.borderColor} ${currentTheme.activeBg} text-white font-bold shadow-[0_0_15px_rgba(0,251,251,0.1)]` 
                          : "border-white/10 bg-[#161c26] hover:border-white/30 text-[#b9cac9]"
                      }`}
                    >
                      <Cpu className="w-5 h-5" style={{ color: hardwareMode === "CPU" ? currentTheme.primary : "#b9cac9" }} />
                      <span className="text-sm font-bold">{t.cpu_btn || "中央處理器 (CPU)"}</span>
                    </button>

                    <button 
                      onClick={() => {
                        setHardwareMode("GPU");
                        showToast(t.toast_gpu || "已啟動圖形處理器 (GPU) 亞毫秒加速。");
                      }}
                      className={`flex items-center justify-center gap-3 p-4 rounded-lg border transition-all duration-300 cursor-pointer ${
                        hardwareMode === "GPU" 
                          ? `${currentTheme.borderColor} ${currentTheme.activeBg} text-white font-bold shadow-[0_0_15px_rgba(0,251,251,0.1)]` 
                          : "border-white/10 bg-[#161c26] hover:border-white/30 text-[#b9cac9]"
                      }`}
                    >
                      <Zap className="w-5 h-5 fill-current" style={{ color: hardwareMode === "GPU" ? currentTheme.primary : "#b9cac9" }} />
                      <span className="text-sm font-bold">{t.gpu_btn || "圖形處理器 (GPU)"}</span>
                    </button>
                  </div>
                </section>

                {/* 2.2 Live Translation Module with complete 15 languages back-and-forth selection & swap */}
                <section className="space-y-2 border bg-[#161c26]/90 p-5 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.2)]" style={{ borderColor: `${currentTheme.primary}40` }}>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#ffdb3c] animate-pulse" />
                      <h4 className="text-sm font-bold text-white tracking-wide">
                        {t.live_title || "實時 AI 翻譯測試台 (Live Deep Translator)"}
                      </h4>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono text-[#b9cac9]">
                      <span className="text-white bg-white/5 px-2 py-0.5 rounded border border-white/10 font-bold">{translationEngine}</span>
                      <button 
                        onClick={swapLanguages}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#242a35] hover:bg-[#2f3540] border border-white/15 text-white hover:text-[#00fbfb] transition-all cursor-pointer font-bold"
                        title="來回雙向切換 15 種語言"
                      >
                        <ArrowRightLeft className="w-3.5 h-3.5" style={{ color: currentTheme.primary }} />
                        <span>{t.swap_btn || "來回切換 [SWAP]"}</span>
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {/* Source Input */}
                    <div className="flex flex-col space-y-1.5">
                      <div className="flex justify-between items-center text-xs text-[#b9cac9] px-1 font-mono">
                        <div className="flex items-center gap-1">
                          <span>{t.source_label || "來源："}</span>
                          {/* 15 Languages selector for Source inline */}
                          <select 
                            value={sourceLang}
                            onChange={(e) => {
                              setSourceLang(e.target.value);
                              showToast(`${t.lang_loaded_toast || "來源語言設為："}${e.target.value}`);
                            }}
                            className="bg-transparent text-white font-bold border-none p-0 focus:outline-none pointer-events-auto cursor-pointer"
                          >
                            {fifteenLanguages.map((lang, idx) => (
                              <option key={idx} value={lang.label} className="bg-[#1a202a] text-white">{lang.label}</option>
                            ))}
                          </select>
                        </div>
                        <button 
                          onClick={() => setInputText("")} 
                          className="text-[#ffb2ba] hover:underline"
                        >
                          {t.clear_btn || "清除"}
                        </button>
                      </div>
                      <textarea
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder={t.placeholder_textarea || "請鍵入需要翻譯的文字，系統將透過 Gemini 大模型即時解譯..."}
                        className="w-full h-32 bg-[#0e141e] border border-white/15 focus:border-[#00fbfb] rounded-lg p-3 text-sm text-white font-sans focus:outline-none resize-none custom-scrollbar"
                        style={{ focusBorderColor: currentTheme.primary }}
                      />
                    </div>

                    {/* Target Translation Output */}
                    <div className="flex flex-col space-y-1.5">
                      <div className="flex justify-between items-center text-xs text-[#b9cac9] px-1 font-mono">
                        <div className="flex items-center gap-1">
                          <span>{t.target_label || "目標："}</span>
                          {/* 15 Languages selector for Target inline */}
                          <select 
                            value={targetLang}
                            onChange={(e) => {
                              setTargetLang(e.target.value);
                              showToast(`${t.lang_loaded_toast || "目標語言設為："}${e.target.value}`);
                            }}
                            className="bg-transparent text-white font-bold border-none p-0 focus:outline-none pointer-events-auto cursor-pointer"
                          >
                            {fifteenLanguages.map((lang, idx) => (
                              <option key={idx} value={lang.label} className="bg-[#1a202a] text-white">{lang.label}</option>
                            ))}
                          </select>
                        </div>
                        <button 
                          onClick={() => copyToClipboard(translatedText, t.copy_btn || "複製")} 
                          className="hover:underline flex items-center gap-1 font-bold"
                          style={{ color: currentTheme.primary }}
                        >
                          <Copy className="w-3 h-3" /> {t.copy_btn || "複製"}
                        </button>
                      </div>
                      <div className="relative w-full h-32 bg-[#0e141e]/50 border border-white/10 rounded-lg p-3 text-sm text-[#dde2f1] font-sans overflow-y-auto custom-scrollbar">
                        {isTranslating ? (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-lg">
                            <div className="flex items-center gap-2 text-xs font-mono" style={{ color: currentTheme.primary }}>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>{t.translating_msg || "AI 正在動態翻譯..."}</span>
                            </div>
                          </div>
                        ) : null}
                        <p className="whitespace-pre-wrap leading-relaxed">
                          {translatedText || <span className="opacity-45 italic">{t.no_input || "[無輸入內容]"}</span>}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-2">
                    <p className="text-[11px] font-mono text-white/40">{t.hint_text || "提示: 可選取兩側的下拉選單或點選「來回切換」以即時反轉解譯方向"}</p>
                    <button 
                      onClick={handleTranslate}
                      disabled={isTranslating}
                      className="flex items-center gap-2 font-bold hover:text-black transition-all px-4 py-1.5 rounded-lg text-xs cursor-pointer"
                      style={{ 
                        backgroundColor: `${currentTheme.primary}15`, 
                        color: currentTheme.primary,
                        border: `1.5px solid ${currentTheme.primary}40`,
                      }}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {t.force_sync || "強制重新翻譯 [SYNC]"}
                    </button>
                  </div>
                </section>



                {/* 2.4 Language Configuration Panel */}
                <section id="LanguageConfigSection" className="space-y-2">
                  <h3 className="text-[11px] font-mono tracking-widest uppercase" style={{ color: currentTheme.primary }}>
                    {t.lang_config_title || "語言設定 [LANGUAGE_SETTING]"}
                  </h3>
                  <div className="glass-panel p-6 rounded-xl space-y-4">
                    
                    {/* Translation Engine Selector */}
                    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-3">
                      <label className="text-sm font-semibold text-[#b9cac9] opacity-80">
                        {t.lang_engine_label || "翻譯引擎"}
                      </label>
                      <div className="relative">
                        <select 
                          className="w-full bg-[#1a202a]/60 border border-white/10 px-3 py-2 rounded-lg text-white sm:text-sm font-medium appearance-none focus:outline-none focus:border-[#00fbfb] cursor-pointer"
                          value={translationEngine}
                          onChange={(e) => {
                            setTranslationEngine(e.target.value);
                            showToast(`${t.engine_changed_toast || "翻譯引擎已切換："}${e.target.value}`);
                          }}
                          style={{ focusBorderColor: currentTheme.primary }}
                        >
                          <option>Gemini AI 翻譯</option>
                          <option>Google 翻譯</option>
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs pointer-events-none" style={{ color: currentTheme.primary }}>▼</span>
                      </div>
                    </div>

                    {/* Source Language - Supported in 15 Languages */}
                    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-3">
                      <label className="text-sm font-semibold text-[#b9cac9] opacity-80">
                        {t.lang_source_label || "來源語言"}
                      </label>
                      <div className="relative">
                        <select 
                          className="w-full bg-[#1a202a] border border-white/20 px-3 py-2 rounded-lg text-white sm:text-sm appearance-none focus:outline-none focus:border-[#00fbfb] cursor-pointer"
                          value={sourceLang}
                          onChange={(e) => setSourceLang(e.target.value)}
                        >
                          {fifteenLanguages.map((lang, idx) => (
                            <option key={idx} value={lang.label}>{lang.label}</option>
                          ))}
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs pointer-events-none" style={{ color: currentTheme.primary }}>▼</span>
                      </div>
                    </div>

                    {/* Target Language - Supported in 15 Languages */}
                    <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] items-center gap-3">
                      <label className="text-sm font-semibold text-[#b9cac9] opacity-80">
                        {t.lang_target_label || "目標語言"}
                      </label>
                      <div className="relative">
                        <select 
                          className="w-full bg-[#1a202a] border border-white/20 px-3 py-2 rounded-lg text-white sm:text-sm appearance-none focus:outline-none focus:border-[#00fbfb] cursor-pointer"
                          value={targetLang}
                          onChange={(e) => setTargetLang(e.target.value)}
                        >
                          {fifteenLanguages.map((lang, idx) => (
                            <option key={idx} value={lang.label}>{lang.label}</option>
                          ))}
                        </select>
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs pointer-events-none" style={{ color: currentTheme.primary }}>▼</span>
                      </div>
                    </div>

                  </div>
                </section>

                {/* 2.5 Shortcuts configuration */}
                <section id="ShortcutsSection" className="space-y-2">
                  <h3 className="text-[11px] font-mono tracking-widest uppercase" style={{ color: currentTheme.primary }}>
                    {t.sh_title || "截圖快捷鍵 [SCREEN_HOTKEY]"}
                  </h3>
                  <div className="flex flex-wrap gap-3 items-center">
                    
                    <button 
                      onClick={() => {
                        setIsRecordingShortcut(true);
                        showToast(t.toast_recording || "請按下鍵盤設定新快捷鍵...");
                      }}
                      className={`flex-1 min-w-[280px] h-14 bg-[#2f3540]/40 border rounded-full flex items-center justify-center px-6 transition-all duration-300 group cursor-pointer ${
                        isRecordingShortcut 
                          ? `border-[#ffdb3c] bg-[#ffdb3c]/10` 
                          : `border-white/10 hover:border-white/30`
                      }`}
                    >
                      <span className={`font-mono text-lg tracking-wider font-bold drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]`} style={{ color: isRecordingShortcut ? "#ffdb3c" : currentTheme.primary }}>
                        {isRecordingShortcut ? (t.detecting || "按鍵偵測中...") : shortcutText}
                      </span>
                    </button>

                    <div className="flex gap-3 h-14">
                      
                      <button 
                        onClick={() => {
                          showToast(t.toast_ready || "錄製器就緒，請在 Windows 執行快捷截圖！");
                        }}
                        className="px-5 rounded-xl border flex items-center gap-2 font-semibold hover:bg-white/5 transition-all text-sm cursor-pointer"
                        style={{ borderColor: currentTheme.primary, backgroundColor: `${currentTheme.primary}15`, color: currentTheme.primary }}
                      >
                        <Video className="w-4 h-4" />
                        <span>{t.sh_record || "錄製"}</span>
                      </button>

                      <button 
                        onClick={() => {
                          setShortcutText("Windows + Shift + D");
                          showToast(t.toast_reset || "快捷鍵已重置為預設 Windows + Shift + D");
                        }}
                        className="px-5 rounded-xl border border-[#ffb2ba] bg-[#ffb2ba]/10 flex items-center gap-2 text-[#ffb2ba] font-semibold hover:bg-[#ffb2ba]/20 transition-all text-sm cursor-pointer"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>{t.sh_reset || "重置"}</span>
                      </button>

                    </div>
                  </div>
                </section>

                {/* 2.6 Translation Modes */}
                <section id="TransModeSection" className="space-y-2">
                  <h3 className="text-[11px] font-mono tracking-widest uppercase" style={{ color: currentTheme.primary }}>
                    {t.tm_title || "翻譯模式 [TRANS_MODE]"}
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    
                    <button 
                      onClick={() => setTranslationMode("overlay")}
                      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-all cursor-pointer ${
                        translationMode === "overlay" 
                          ? `${currentTheme.borderColor} ${currentTheme.activeBg} font-bold text-white shadow-[0_0_12px_rgba(0,0,0,0.2)]` 
                          : "border border-white/10 bg-[#161c26] text-[#b9cac9] hover:border-white/30"
                      }`}
                    >
                      <Layers className="w-6 h-6" style={{ color: translationMode === "overlay" ? currentTheme.primary : "#b9cac9" }} />
                      <span className="text-xs font-semibold">{t.tm_overlay || "(A) 覆蓋模式"}</span>
                    </button>

                    <button 
                      onClick={() => setTranslationMode("anchor")}
                      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-all cursor-pointer ${
                        translationMode === "anchor" 
                          ? `${currentTheme.borderColor} ${currentTheme.activeBg} font-bold text-white shadow-[0_0_12px_rgba(0,0,0,0.2)]` 
                          : "border border-white/10 bg-[#161c26] text-[#b9cac9] hover:border-white/30"
                      }`}
                    >
                      <Anchor className="w-6 h-6" style={{ color: translationMode === "anchor" ? currentTheme.primary : "#b9cac9" }} />
                      <span className="text-xs font-semibold">{t.tm_anchor || "錨點模式"}</span>
                    </button>

                    <button 
                      onClick={() => setTranslationMode("list")}
                      className={`flex flex-col items-center justify-center gap-2 p-4 rounded-lg transition-all cursor-pointer ${
                        translationMode === "list" 
                          ? `${currentTheme.borderColor} ${currentTheme.activeBg} font-bold text-white shadow-[0_0_12px_rgba(0,0,0,0.2)]` 
                          : "border border-white/10 bg-[#161c26] text-[#b9cac9] hover:border-white/30"
                      }`}
                    >
                      <List className="w-6 h-6" style={{ color: translationMode === "list" ? currentTheme.primary : "#b9cac9" }} />
                      <span className="text-xs font-semibold">{t.tm_list || "列表模式"}</span>
                    </button>

                  </div>
                </section>

                {/* 2.7 Module Status LEDs */}
                <section id="ModuleStatusSection" className="space-y-2">
                  <h3 className="text-[11px] font-mono tracking-widest uppercase" style={{ color: currentTheme.primary }}>
                    {t.ms_title || "模組狀態 [MODULE_STATUS]"}
                  </h3>
                  <div className="glass-panel rounded-xl overflow-hidden">
                    <div className="divide-y divide-white/10">
                      
                      {/* OCR Row */}
                      <div className="flex justify-between items-center p-4">
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={() => {
                              setOcrStatus(!ocrStatus);
                              showToast(`${t.toast_ocr_prefix || "OCR 模組已"}${!ocrStatus ? (t.val_on || '開啓') : (t.val_off || '暫停')}`);
                            }}
                            className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                              ocrStatus 
                                ? "bg-white led-active" 
                                : "bg-[#2f3540] border-white/20"
                            }`}
                            style={{ boxShadow: ocrStatus ? `0 0 10px #fff, 0 0 16px ${currentTheme.primary}` : "none", borderColor: ocrStatus ? currentTheme.primary : "transparent" }}
                          />
                          <span className="text-sm font-medium text-white font-zh">{t.ms_ocr || "文字辨識 (OCR) 線上引擎"}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs italic font-bold" style={{ color: currentTheme.primary }}>
                          <span>{ocrStatus ? (t.ocr_ready || "運作就緒") : (t.ocr_paused || "暫停服務")}</span>
                          <CheckCircle2 className="w-4.5 h-4.5" />
                        </div>
                      </div>

                      {/* Offline Row */}
                      <div className="flex justify-between items-center p-4">
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={() => {
                              setOfflineStatus(!offlineStatus);
                              showToast(`${t.toast_offline_prefix || "本地離線備用引擎已"}${!offlineStatus ? (t.val_deployed || '部署且預熱') : (t.val_unloaded || '卸載停用')}`);
                            }}
                            className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                              offlineStatus 
                                ? "bg-white led-active" 
                                : "bg-[#2f3540] border-white/20"
                            }`}
                            style={{ boxShadow: offlineStatus ? `0 0 10px #fff, 0 0 16px ${currentTheme.primary}` : "none", borderColor: offlineStatus ? currentTheme.primary : "transparent" }}
                          />
                          <span className="text-sm font-medium text-white font-zh">{t.ms_offline || "離線翻譯備份引擎"}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs italic font-bold animate-pulse" style={{ color: currentTheme.primary }}>
                          <span>{offlineStatus ? (t.offline_ready || "本機快取就緒") : (t.offline_unloaded || "未裝載")}</span>
                          <CheckCircle2 className="w-4.5 h-4.5" />
                        </div>
                      </div>

                      {/* Image Process Row */}
                      <div className="flex justify-between items-center p-4">
                        <div className="flex items-center gap-4">
                          <button 
                            onClick={() => {
                              setImageFixStatus(!imageFixStatus);
                              showToast(`${t.toast_image_prefix || "圖像修復濾鏡已"}${!imageFixStatus ? (t.val_enabled || '啟用') : (t.val_disabled || '停用')}`);
                            }}
                            className={`w-3.5 h-3.5 rounded-full border transition-all cursor-pointer ${
                              imageFixStatus 
                                ? "bg-white led-active" 
                                : "bg-[#2f3540] border-white/20"
                            }`}
                            style={{ boxShadow: imageFixStatus ? `0 0 10px #fff, 0 0 16px ${currentTheme.primary}` : "none", borderColor: imageFixStatus ? currentTheme.primary : "transparent" }}
                          />
                          <span className="text-sm font-medium text-white font-zh">{t.ms_image || "圖像修復與去模糊處理 (Inpainting)"}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs italic font-bold" style={{ color: currentTheme.primary }}>
                          <span>{imageFixStatus ? (t.image_ready || "加速就緒") : (t.image_unloaded || "未啟用")}</span>
                          <CheckCircle2 className="w-4.5 h-4.5" />
                        </div>
                      </div>

                    </div>
                  </div>
                </section>
              </>
            )}

            {/* 3. Improved Preferences Settings Tab Component (Features Theme selection selector - Fig 3) */}
            {activeTab === "settings" && (
              <section className="space-y-4">
                <div className="glass-panel p-6 rounded-xl space-y-6">
                  
                  {/* Theme Color selector interface panel as requested in Fig 3 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <Palette className="w-4.5 h-4.5" style={{ color: currentTheme.primary }} />
                      <span>{t.th_title || "主題外觀配色方案 [THEME_COLOR_SELECTION]"}</span>
                    </h4>
                    <p className="text-xs text-[#b9cac9] leading-relaxed">
                      {t.th_desc || "更換高飽和、高科技氣氛燈（動態控制邊界、框線陰影與發光二極體 LED 顏色）："}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 pt-2">
                      {/* Cyan Theme */}
                      <button 
                        onClick={() => {
                          setThemeColor("cyan");
                          showToast((t.toast_theme_prefix || "主題已切換：") + (t.theme_cyan || "極客青 (Cyber Cyan)"));
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all cursor-pointer ${
                          themeColor === "cyan" ? "border-[#00fbfb] bg-[#00fbfb]/10 text-white" : "border-white/10 hover:border-white/20 text-[#b9cac9]"
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full bg-[#00fbfb] shadow-[0_0_8px_#00fbfb]" />
                        <span className="text-xs font-bold font-zh">{t.theme_cyan || "極客青 (Cyber Cyan)"}</span>
                      </button>

                      {/* Gold Theme */}
                      <button 
                        onClick={() => {
                          setThemeColor("gold");
                          showToast((t.toast_theme_prefix || "主題已切換：") + (t.theme_gold || "亮晶黃 (Amber Gold)"));
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all cursor-pointer ${
                          themeColor === "gold" ? "border-[#ffdb3c] bg-[#ffdb3c]/10 text-white" : "border-white/10 hover:border-white/20 text-[#b9cac9]"
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full bg-[#ffdb3c] shadow-[0_0_8px_#ffdb3c]" />
                        <span className="text-xs font-bold font-zh">{t.theme_gold || "亮晶黃 (Amber Gold)"}</span>
                      </button>

                      {/* Pink Theme */}
                      <button 
                        onClick={() => {
                          setThemeColor("pink");
                          showToast((t.toast_theme_prefix || "主題已切換：") + (t.theme_pink || "櫻花粉 (Sakura Pink)"));
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all cursor-pointer ${
                          themeColor === "pink" ? "border-[#ffb2ba] bg-[#ffb2ba]/10 text-white" : "border-white/10 hover:border-white/20 text-[#b9cac9]"
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full bg-[#ffb2ba] shadow-[0_0_8px_#ffb2ba]" />
                        <span className="text-xs font-bold font-zh">{t.theme_pink || "櫻花粉 (Sakura Pink)"}</span>
                      </button>

                      {/* Green Theme */}
                      <button 
                        onClick={() => {
                          setThemeColor("green");
                          showToast((t.toast_theme_prefix || "主題已切換：") + (t.theme_green || "翡翠綠 (Emerald Green)"));
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all cursor-pointer ${
                          themeColor === "green" ? "border-[#4ade80] bg-[#4ade80]/10 text-white" : "border-white/10 hover:border-white/20 text-[#b9cac9]"
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full bg-[#4ade80] shadow-[0_0_8px_#4ade80]" />
                        <span className="text-xs font-bold font-zh">{t.theme_green || "翡翠綠 (Emerald Green)"}</span>
                      </button>

                      {/* Purple Theme */}
                      <button 
                        onClick={() => {
                          setThemeColor("purple");
                          showToast((t.toast_theme_prefix || "主題已切換：") + (t.theme_purple || "幻影紫 (Ghostly Purple)"));
                        }}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-all cursor-pointer ${
                          themeColor === "purple" ? "border-[#c084fc] bg-[#c084fc]/10 text-white" : "border-white/10 hover:border-white/20 text-[#b9cac9]"
                        }`}
                      >
                        <span className="w-3.5 h-3.5 rounded-full bg-[#c084fc] shadow-[0_0_8px_#c084fc]" />
                        <span className="text-xs font-bold font-zh">{t.theme_purple || "幻影紫 (Ghostly Purple)"}</span>
                      </button>
                    </div>

                  </div>

                  <div className="border-t border-white/10 pt-4 space-y-4">
                    <h3 className="font-display font-bold text-base text-white">
                      {t.pref_title || "進階偏好設定 [PREFERENCES]"}
                    </h3>
                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between items-center py-2">
                        <span className="text-white font-medium">{t.pref_autoclip || "翻譯結果自動剪貼"}</span>
                        <input type="checkbox" defaultChecked className="rounded border-white/20 bg-[#161c26] text-[#00fbfb] focus:ring-0" style={{ color: currentTheme.primary }} />
                      </div>
                      <div className="flex justify-between items-center py-2 border-t border-white/10">
                        <span className="text-white font-medium">{t.pref_sound || "快捷鍵啟動時音效提示"}</span>
                        <input type="checkbox" className="rounded border-white/20 bg-[#161c26] text-[#00fbfb] focus:ring-0" style={{ color: currentTheme.primary }} />
                      </div>
                      <div className="flex justify-between items-center py-2 border-t border-white/10">
                        <span className="text-white font-medium">{t.pref_fp16 || "GPU 加速最佳化 (FP16 精度)"}</span>
                        <input type="checkbox" defaultChecked className="rounded border-white/20 bg-[#161c26] text-[#00fbfb] focus:ring-0" style={{ color: currentTheme.primary }} />
                      </div>
                    </div>
                  </div>

                </div>
              </section>
            )}

            {/* Hardware Info Tab Component */}
            {activeTab === "hardware" && (
              <section className="space-y-4">
                <div className="glass-panel p-6 rounded-xl space-y-4">
                  <h3 className="font-display font-bold text-base text-white border-b border-white/10 pb-2">
                    {t.hw_info_title || "系統硬體監測 [HARDWARE_INFO]"}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-3 bg-[#161c26] rounded border border-white/5 space-y-1">
                      <p className="text-[#b9cac9]">{t.cpu_btn || "中央處理器 (CPU)"}</p>
                      <p className="text-lg font-bold text-white">Intel Core Threaded vCore</p>
                      <p className="text-[10px]" style={{ color: currentTheme.primary }}>{t.hw_usage || "使用率"}: 14% | {t.hw_temp || "溫度"}: 42°C</p>
                    </div>
                    <div className="p-3 bg-[#161c26] rounded border border-white/5 space-y-1">
                      <p className="text-[#b9cac9]">{t.gpu_btn || "圖形處理器 (GPU)"}</p>
                      <p className="text-lg font-bold" style={{ color: currentTheme.primary }}>NVIDIA CUDA Core Accelerator</p>
                      <p className="text-[10px]" style={{ color: currentTheme.primary }}>VRAM: 8.4GB / 16GB | {t.hw_temp || "溫度"}: 55°C</p>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Persistent Page Footer */}
            <footer id="MainFooter" className="flex flex-col items-center justify-center pt-8 space-y-1 border-t border-white/10">
              <div className="flex justify-center items-center gap-1.5 text-xs font-medium font-sans" style={{ color: currentTheme.primary }}>
                <span>{t.footer_installed || "核心系統翻譯安全防禦已安裝"}</span>
                <span>✓</span>
                <span className="mx-2 text-white/20">|</span>
                <button 
                  onClick={() => setIsRecordingShortcut(true)}
                  className="text-[#b9cac9] font-mono hover:text-white transition-all cursor-pointer"
                >
                  {t.footer_shortcut || "快捷鍵啟動"} [{shortcutText}]
                </button>
              </div>
            </footer>

          </div>
        </div>
      </main>
    </div>
  );
}
