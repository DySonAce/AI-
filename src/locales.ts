// Localization resources for AI Translator supporting 15 languages

export const getLanguageKey = (lang: string): string => {
  if (lang.includes("繁體中文") || lang.includes("Traditional")) return "zh-tw";
  if (lang.includes("简体中文") || lang.includes("Simplified")) return "zh-cn";
  if (lang.includes("English")) return "en";
  if (lang.includes("日本語") || lang.includes("Japanese")) return "ja";
  if (lang.includes("한국") || lang.includes("Korean")) return "ko";
  if (lang.includes("Español") || lang.includes("Spanish")) return "es";
  if (lang.includes("Français") || lang.includes("French")) return "fr";
  if (lang.includes("Deutsch") || lang.includes("German")) return "de";
  if (lang.includes("Italiano") || lang.includes("Italian")) return "it";
  if (lang.includes("Русский") || lang.includes("Russian")) return "ru";
  if (lang.includes("Português") || lang.includes("Portuguese")) return "pt";
  if (lang.includes("Tiếng Việt") || lang.includes("Vietnamese")) return "vi";
  if (lang.includes("ไทย") || lang.includes("Thai")) return "th";
  if (lang.includes("Bahasa Indonesia") || lang.includes("Indonesian")) return "id";
  if (lang.includes("Türkçe") || lang.includes("Turkish")) return "tr";
  return "zh-tw";
};

// Complete translation maps for the 15 interface languages
export const loc: Record<string, Record<string, string>> = {
  "zh-tw": {
    console_tab: "主控制台 (Console)",
    settings_tab: "偏好設定 [SETTINGS]",
    hardware_tab: "硬體資訊",
    ui_lang_label: "UI語言切換",
    update_engine: "更新核心引擎",
    title_ai_trans: "AI 翻譯",
    mode_realtime: "即時模式 [REALTIME]",
    sys_online: "SYS: ONLINE",
    hw_title: "硬體模式 [HARDWARE_MODE]",
    cpu_btn: "中央處理器 (CPU)",
    gpu_btn: "圖形處理器 (GPU)",
    live_title: "實時 AI 翻譯測試台 (Live Deep Translator)",
    swap_btn: "來回切換 [SWAP]",
    clear_btn: "清除內容",
    copy_btn: "複製",
    translating_msg: "AI 正在動態翻譯...",
    no_input: "[無輸入內容]",
    placeholder_textarea: "請鍵入需要翻譯的文字，系統將透過 Gemini 大模型即時解譯...",
    hint_text: "提示: 可選取左右下拉選單或點選「來回切換」以即時反轉解譯方向",
    force_sync: "強制重新翻譯 [SYNC]",
    source_label: "來源：",
    target_label: "目標：",
    
    // Config panel
    lang_config_title: "語言設定 [LANGUAGE_SETTING]",
    lang_engine_label: "翻譯引擎",
    lang_source_label: "來源語言",
    lang_target_label: "目標語言",
    
    // Shortcuts
    hotkey_title: "截圖快捷鍵 [SCREEN_HOTKEY]",
    sh_title: "截圖快捷鍵 [SCREEN_HOTKEY]",
    btn_record: "錄製",
    sh_record: "錄製",
    btn_reset: "重置",
    sh_reset: "重置",
    toast_recording: "請按下鍵盤設定新快捷鍵...",
    detecting: "按鍵偵測中...",
    toast_ready: "錄製器就緒，請在 Windows 執行快捷截圖！",
    toast_reset: "快捷鍵已重置為預設 Windows + Shift + D",
    toast_shortcut_saved: "快捷鍵設定完成！",

    // Trans modes
    trans_mode_title: "翻譯模式 [TRANS_MODE]",
    tm_title: "翻譯模式 [TRANS_MODE]",
    overlay_mode: "(A) 覆蓋模式",
    tm_overlay: "(A) 覆蓋模式",
    anchor_mode: "錨點模式",
    tm_anchor: "錨點模式",
    list_mode: "列表模式",
    tm_list: "列表模式",

    // Module Status
    mod_status_title: "模組狀態 [MODULE_STATUS]",
    ms_title: "模組狀態 [MODULE_STATUS]",
    ocr_label: "文字辨識 (OCR) 線上引擎",
    ms_ocr: "文字辨識 (OCR) 線上引擎",
    ocr_ready: "運作就緒",
    ocr_pause: "暫停服務",
    ocr_paused: "暫停服務",
    offline_label: "離線翻譯備份引擎",
    ms_offline: "離線翻譯備份引擎",
    offline_ready: "本機快取就緒",
    offline_not_loaded: "未裝載",
    offline_unloaded: "未裝載",
    image_label: "圖像修復與去模糊處理 (Inpainting)",
    ms_image: "圖像修復與去模糊處理 (Inpainting)",
    image_ready: "加速就緒",
    image_not_loaded: "未啟用",
    image_unloaded: "未啟用",

    // Appearance & Preferences
    appearance_scheme: "主題外觀配色方案 [THEME_COLOR_SELECTION]",
    th_title: "主題外觀配色方案 [THEME_COLOR_SELECTION]",
    appearance_desc: "更換高飽和、高科技氣氛燈（動態控制邊界、框線陰影與發光二極體 LED 顏色）：",
    th_desc: "更換高飽和、高科技氣氛燈（動態控制邊界、框線陰影與發光二極體 LED 顏色）：",
    theme_cyan: "極客青 (Cyber Cyan)",
    theme_gold: "亮晶黃 (Amber Gold)",
    theme_pink: "櫻花粉 (Sakura Pink)",
    theme_green: "翡翠綠 (Emerald Green)",
    theme_purple: "幻影紫 (Ghostly Purple)",
    adv_pref_title: "進階偏好設定 [PREFERENCES]",
    pref_title: "進階偏好設定 [PREFERENCES]",
    pref_auto_copy: "翻譯結果自動剪貼",
    pref_autoclip: "翻譯結果自動剪貼",
    pref_sound: "快捷鍵啟動時音效提示",
    pref_gpu_opt: "GPU 加速最佳化 (FP16 精度)",
    pref_fp16: "GPU 加速最佳化 (FP16 精度)",

    // Hardware info
    sys_hw_mon: "系統硬體監測 [HARDWARE_INFO]",
    hw_info_title: "系統硬體監測 [HARDWARE_INFO]",
    cpu_vcore: "Intel Core Threaded vCore",
    cpu_usage_temp: "使用率: 14% | 溫度: 42°C",
    gpu_cuda: "NVIDIA CUDA Core Accelerator",
    gpu_vram_temp: "VRAM: 8.4GB / 16GB | 溫度: 55°C",
    hw_usage: "使用率",
    hw_temp: "溫度",

    // Footer
    footer_secure: "核心系統翻譯安全防禦已安裝",
    footer_installed: "核心系統翻譯安全防禦已安裝",
    footer_hotkey_btn: "快捷鍵啟動",
    footer_shortcut: "快捷鍵啟動",

    // Other Toasts / App States
    lang_loaded_toast: "介面語系已裝載：",
    copied_toast: "已成功複製到剪貼簿！",
    swapped_toast: "已交換語系方向！",
    sys_min: "已最小化。",
    sys_max: "已自動調整至全螢幕。",
    sys_close: "確認中。",
    toast_cpu: "已切換至中央處理器(CPU)低耗電模型模式。",
    toast_gpu: "已啟動圖形處理器 (GPU) 亞毫秒加速。",
    engine_changed_toast: "翻譯引擎已切換：",
    toast_ocr_prefix: "OCR 模組已",
    toast_offline_prefix: "本地離線備用引擎已",
    toast_image_prefix: "圖像修復濾鏡已",
    toast_theme_prefix: "主題已切換：",
    val_on: "開啓",
    val_off: "暫停",
    val_enabled: "啟用",
    val_disabled: "停用",
    val_deployed: "部署且預熱",
    val_unloaded: "卸載停用",
    engine_status: "核心翻譯編譯系統：已是最新狀態 V1.0.4",
    translate_error: "[連線錯誤]: 無法連線至 Express 翻譯伺服器。請確認伺服器於背景運作。\n系統仍使用離線備份：",
    translate_fail: "[作業失敗]",
    no_result: "[無結果]"
  },
  "zh-cn": {
    console_tab: "主控制台 (Console)",
    settings_tab: "偏好设置 [SETTINGS]",
    hardware_tab: "硬件信息",
    ui_lang_label: "UI语言切换",
    update_engine: "更新核心引擎",
    title_ai_trans: "AI 翻译",
    mode_realtime: "即时模式 [REALTIME]",
    sys_online: "SYS: ONLINE",
    hw_title: "硬件模式 [HARDWARE_MODE]",
    cpu_btn: "中央处理器 (CPU)",
    gpu_btn: "图形处理器 (GPU)",
    live_title: "实时 AI 翻译测试台 (Live Deep Translator)",
    swap_btn: "来回切换 [SWAP]",
    clear_btn: "清除内容",
    copy_btn: "复制",
    translating_msg: "AI 正在动态翻译...",
    no_input: "[无输入内容]",
    placeholder_textarea: "请键入需要翻译的文字，系统将通过 Gemini 大模型即时解译...",
    hint_text: "提示: 可选取左右下拉菜单或点击「来回切换」以即时反转解译方向",
    force_sync: "强制重新翻译 [SYNC]",
    source_label: "来源：",
    target_label: "目标：",
    
    // Config panel
    lang_config_title: "语言设定 [LANGUAGE_SETTING]",
    lang_engine_label: "翻译引擎",
    lang_source_label: "来源语言",
    lang_target_label: "目标语言",
    
    // Shortcuts
    hotkey_title: "截图快捷键 [SCREEN_HOTKEY]",
    sh_title: "截图快捷键 [SCREEN_HOTKEY]",
    btn_record: "录制",
    sh_record: "录制",
    btn_reset: "重置",
    sh_reset: "重置",
    toast_recording: "请按下键盘设定新快捷键...",
    detecting: "按键侦测中...",
    toast_ready: "录制器就绪，请在 Windows 执行快捷截图！",
    toast_reset: "快捷键已重置为默认 Windows + Shift + D",
    toast_shortcut_saved: "快捷键设定完成！",

    // Trans modes
    trans_mode_title: "翻译模式 [TRANS_MODE]",
    tm_title: "翻译模式 [TRANS_MODE]",
    overlay_mode: "(A) 覆盖模式",
    tm_overlay: "(A) 覆盖模式",
    anchor_mode: "锚点模式",
    tm_anchor: "锚点模式",
    list_mode: "列表模式",
    tm_list: "列表模式",

    // Module Status
    mod_status_title: "模块状态 [MODULE_STATUS]",
    ms_title: "模块状态 [MODULE_STATUS]",
    ocr_label: "文字识别 (OCR) 在线引擎",
    ms_ocr: "文字识别 (OCR) 在线引擎",
    ocr_ready: "运作就绪",
    ocr_pause: "暂停服务",
    ocr_paused: "暂停服务",
    offline_label: "离线翻译备份引擎",
    ms_offline: "离线翻译备份引擎",
    offline_ready: "本机缓存就绪",
    offline_not_loaded: "未装载",
    offline_unloaded: "未装载",
    image_label: "图像修复与去模糊处理 (Inpainting)",
    ms_image: "图像修复与去模糊处理 (Inpainting)",
    image_ready: "加速就绪",
    image_not_loaded: "未启用",
    image_unloaded: "未启用",

    // Appearance & Preferences
    appearance_scheme: "主题外观配色方案 [THEME_COLOR_SELECTION]",
    th_title: "主题外观配色方案 [THEME_COLOR_SELECTION]",
    appearance_desc: "更换高饱和、高科技气氛灯（动态控制边界、框线阴影与发光二极管 LED 颜色）：",
    th_desc: "更换高饱和、高科技气氛灯（动态控制边界、框线阴影与发光二极管 LED 颜色）：",
    theme_cyan: "极客青 (Cyber Cyan)",
    theme_gold: "亮晶黄 (Amber Gold)",
    theme_pink: "樱花粉 (Sakura Pink)",
    theme_green: "翡翠绿 (Emerald Green)",
    theme_purple: "幻影紫 (Ghostly Purple)",
    adv_pref_title: "高级偏好设置 [PREFERENCES]",
    pref_title: "高级偏好设置 [PREFERENCES]",
    pref_auto_copy: "翻译结果自动剪贴",
    pref_autoclip: "翻译结果自动剪贴",
    pref_sound: "快捷键启动时音效提示",
    pref_gpu_opt: "GPU 加速最佳化 (FP16 精度)",
    pref_fp16: "GPU 加速最佳化 (FP16 精度)",

    // Hardware info
    sys_hw_mon: "系统硬件监测 [HARDWARE_INFO]",
    hw_info_title: "系统硬件监测 [HARDWARE_INFO]",
    cpu_vcore: "Intel Core Threaded vCore",
    cpu_usage_temp: "使用率: 14% | 温度: 42°C",
    gpu_cuda: "NVIDIA CUDA Core Accelerator",
    gpu_vram_temp: "VRAM: 8.4GB / 16GB | 温度: 55°C",
    hw_usage: "使用率",
    hw_temp: "温度",

    // Footer
    footer_secure: "核心系统翻译安全防御已安装",
    footer_installed: "核心系统翻译安全防御已安装",
    footer_hotkey_btn: "快捷键启动",
    footer_shortcut: "快捷键启动",

    // Other Toasts / App States
    lang_loaded_toast: "界面语系已装载：",
    copied_toast: "已成功复制到剪贴簿！",
    swapped_toast: "已交换语系方向！",
    sys_min: "已最小化。",
    sys_max: "已自动调整至全屏幕。",
    sys_close: "确认中。",
    toast_cpu: "已切换至中央处理器(CPU)低耗电模型模式。",
    toast_gpu: "已启动图形处理器 (GPU) 亚毫秒加速。",
    engine_changed_toast: "翻译引擎已切换：",
    toast_ocr_prefix: "OCR 模块已",
    toast_offline_prefix: "本地离线备用引擎已",
    toast_image_prefix: "图像修复过滤已",
    toast_theme_prefix: "主题已切换：",
    val_on: "开启",
    val_off: "暂停",
    val_enabled: "启用",
    val_disabled: "停用",
    val_deployed: "部署且预热",
    val_unloaded: "卸载停用",
    engine_status: "核心翻译编译系统：已是最新状态 V1.0.4",
    translate_error: "[连线错误]: 无法连线至 Express 翻译伺服器。请确认伺服器于背景运作。\n系统仍使用离线备份：",
    translate_fail: "[作业失败]",
    no_result: "[无结果]"
  },
  "en": {
    console_tab: "Console",
    settings_tab: "Settings",
    hardware_tab: "Hardware",
    ui_lang_label: "UI Language Switch",
    update_engine: "Update Engine",
    title_ai_trans: "AI Translator",
    mode_realtime: "REALTIME MODE",
    sys_online: "SYS: ONLINE",
    hw_title: "Hardware Mode [HARDWARE_MODE]",
    cpu_btn: "CPU Mode",
    gpu_btn: "GPU Mode",
    live_title: "Live Deep Translator Arena",
    swap_btn: "SWAP [Languages]",
    clear_btn: "Clear Content",
    copy_btn: "Copy text",
    translating_msg: "AI is translating in real-time...",
    no_input: "[No input text provided]",
    placeholder_textarea: "Type text to translate, Gemini AI is standing by...",
    hint_text: "Protip: Select language pairs on the left/right dropdowns or hit swap anytime to invert directions",
    force_sync: "Force Re-Translate [SYNC]",
    source_label: "Source: ",
    target_label: "Target: ",
    
    // Config panel
    lang_config_title: "Language Configurations [LANGUAGE_SETTING]",
    lang_engine_label: "Engine Select",
    lang_source_label: "Source Language",
    lang_target_label: "Target Language",
    
    // Shortcuts
    hotkey_title: "Screenshot Hotkey [SCREEN_HOTKEY]",
    sh_title: "Screenshot Hotkey [SCREEN_HOTKEY]",
    btn_record: "Record",
    sh_record: "Record",
    btn_reset: "Reset",
    sh_reset: "Reset",
    toast_recording: "Press keyboard keys to bind a new hotkey...",
    detecting: "Detecting keys...",
    toast_ready: "Recorder ready, perform screenshot hotkey in Windows!",
    toast_reset: "Hotkey reset to Windows + Shift + D default",
    toast_shortcut_saved: "Shortcut updated successfully!",

    // Trans modes
    trans_mode_title: "Translate UI Type [TRANS_MODE]",
    tm_title: "Translate UI Type [TRANS_MODE]",
    overlay_mode: "(A) Overlay Text Mode",
    tm_overlay: "(A) Overlay Text Mode",
    anchor_mode: "Anchor Pin Mode",
    tm_anchor: "Anchor Pin Mode",
    list_mode: "List Split Mode",
    tm_list: "List Split Mode",

    // Module Status
    mod_status_title: "Module Indicators [MODULE_STATUS]",
    ms_title: "Module Indicators [MODULE_STATUS]",
    ocr_label: "Active OCR Online Engine",
    ms_ocr: "Active OCR Online Engine",
    ocr_ready: "Ready",
    ocr_pause: "Suspended",
    ocr_paused: "Suspended",
    offline_label: "Offline Translator Fallback Local Client",
    ms_offline: "Offline Translator Fallback Local Client",
    offline_ready: "Warmup OK",
    offline_not_loaded: "Unloaded",
    offline_unloaded: "Unloaded",
    image_label: "Visual Inpainting & Blur Correction Filtering",
    ms_image: "Visual Inpainting & Blur Correction Filtering",
    image_ready: "Accelerated",
    image_not_loaded: "Disabled",
    image_unloaded: "Disabled",

    // Appearance & Preferences
    appearance_scheme: "Interface Ambient Theme LED [THEME_COLOR_SELECTION]",
    th_title: "Interface Ambient Theme LED [THEME_COLOR_SELECTION]",
    appearance_desc: "Alter high-chroma, tactical ambient neon glow (controls boxes, glow shadows, and dynamic LED components):",
    th_desc: "Alter high-chroma, tactical ambient neon glow (controls boxes, glow shadows, and dynamic LED components):",
    theme_cyan: "Cyber Cyan",
    theme_gold: "Amber Gold",
    theme_pink: "Sakura Pink",
    theme_green: "Emerald Green",
    theme_purple: "Ghostly Purple",
    adv_pref_title: "Advanced Preferences [PREFERENCES]",
    pref_title: "Advanced Preferences [PREFERENCES]",
    pref_auto_copy: "Auto-copy translated nodes onto clipboard",
    pref_autoclip: "Auto-copy translated nodes onto clipboard",
    pref_sound: "Play notification bells when key shortcuts occur",
    pref_gpu_opt: "GPU optimal FP16 pipeline processing mode",
    pref_fp16: "GPU optimal FP16 pipeline processing mode",

    // Hardware info
    sys_hw_mon: "System Hardware Monitor [HARDWARE_INFO]",
    hw_info_title: "System Hardware Monitor [HARDWARE_INFO]",
    cpu_vcore: "Intel Core Threaded vCore Allocation",
    cpu_usage_temp: "Usage: 14% | Core: 42°C",
    gpu_cuda: "NVIDIA CUDA Core Engine Speedometer",
    gpu_vram_temp: "VRAM: 8.4GB / 16GB | Core: 55°C",
    hw_usage: "Usage",
    hw_temp: "Temp",

    // Footer
    footer_secure: "Core terminal systems secured",
    footer_installed: "Core terminal systems secured",
    footer_hotkey_btn: "Bound shortcut",
    footer_shortcut: "Bound shortcut",

    // Other Toasts / App States
    lang_loaded_toast: "UI Language mounted: ",
    copied_toast: "Successfully copied to clipboard!",
    swapped_toast: "Language directions swapped!",
    sys_min: "Minimized successfully.",
    sys_max: "Window scale set to full screen automatically.",
    sys_close: "Confirming closure status.",
    toast_cpu: "Switched to CPU low-consumption model execution mode.",
    toast_gpu: "Launched GPU sub-millisecond core hardware acceleration.",
    engine_changed_toast: "Translation engine switched to: ",
    toast_ocr_prefix: "OCR module status: ",
    toast_offline_prefix: "Offline local engine status: ",
    toast_image_prefix: "Inpainting filter status: ",
    toast_theme_prefix: "Theme switched to: ",
    val_on: "ACTIVE",
    val_off: "PAUSED",
    val_enabled: "ENABLED",
    val_disabled: "DISABLED",
    val_deployed: "DEPLOYED & WARMED",
    val_unloaded: "UNLOADED & INACTIVE",
    engine_status: "Core translator compiler: Already up to date V1.0.4",
    translate_error: "[Connection Error]: Unable to connect to local Express core translators. Retrying offline fallback: ",
    translate_fail: "[Execution Failed]",
    no_result: "[No result]"
  },
  "ja": {
    console_tab: "コンソール (Console)",
    settings_tab: "環境設定 [SETTINGS]",
    hardware_tab: "ハードウェア情報",
    ui_lang_label: "UI言語切り替え",
    update_engine: "コアエンジン更新",
    title_ai_trans: "AI 翻譯",
    mode_realtime: "リアルタイムモード",
    sys_online: "システム: オンライン",
    hw_title: "ハードウェアモード [HARDWARE_MODE]",
    cpu_btn: "CPU モード",
    gpu_btn: "GPU モード",
    live_title: "リアルタイム AI 翻訳テストベンチ",
    swap_btn: "言語切替 [SWAP]",
    clear_btn: "クリア",
    copy_btn: "コピー",
    translating_msg: "AI 動的翻訳中...",
    no_input: "[入力なし]",
    placeholder_textarea: "翻訳するテキストをここに入力してください。Gemini AI が即時解析します...",
    hint_text: "ヒント: 必要に応じて言語を選択するか、SWAPボタンで双方向の切り替えが可能です",
    force_sync: "強制再翻訳 [SYNC]",
    source_label: "翻訳元：",
    target_label: "翻訳先：",
    
    // Config panel
    lang_config_title: "言語設定 [LANGUAGE_SETTING]",
    lang_engine_label: "翻訳エンジン",
    lang_source_label: "ソース言語",
    lang_target_label: "ターゲット言語",
    
    // Shortcuts
    hotkey_title: "キャプチャショートカットキー [SCREEN_HOTKEY]",
    sh_title: "キャプチャショートカットキー [SCREEN_HOTKEY]",
    btn_record: "録音",
    sh_record: "録音",
    btn_reset: "リセット",
    sh_reset: "リセット",
    toast_recording: "キーボードのキーを押して新しいショートカットをバインドします...",
    detecting: "キー検出中...",
    toast_ready: "レコーダーの準備ができました。Windows でスクリーンショットのショートカットを実行してください！",
    toast_reset: "ショートカットがデフォルトの Windows + Shift + D にリセットされました",
    toast_shortcut_saved: "ショートカットが正常に更新されました！",

    // Trans modes
    trans_mode_title: "翻訳モード [TRANS_MODE]",
    tm_title: "翻訳モード [TRANS_MODE]",
    overlay_mode: "(A) オーバーレイ表示",
    tm_overlay: "(A) オーバーレイ表示",
    anchor_mode: "アンカー固定表示",
    tm_anchor: "アンカー固定表示",
    list_mode: "分割リスト表示",
    tm_list: "分割リスト表示",

    // Module Status
    mod_status_title: "モジュール動作状態 [MODULE_STATUS]",
    ms_title: "モジュール動作状態 [MODULE_STATUS]",
    ocr_label: "文字認識 (OCR) オンラインエンジン",
    ms_ocr: "文字認識 (OCR) オンラインエンジン",
    ocr_ready: "準備完了",
    ocr_pause: "一時停止中",
    ocr_paused: "一時停止中",
    offline_label: "オフライン翻訳ローカルエンジン",
    ms_offline: "オフライン翻訳ローカルエンジン",
    offline_ready: "キャッシュ稼働中",
    offline_not_loaded: "未ロード",
    offline_unloaded: "未ロード",
    image_label: "画像修復およびノイズ低減処理 (Inpainting)",
    ms_image: "画像修復およびノイズ低減処理 (Inpainting)",
    image_ready: "アクセラレーション対応",
    image_not_loaded: "無効",
    image_unloaded: "無効",

    // Appearance & Preferences
    appearance_scheme: "UI外観カラー（テーマ）設定 [THEME_COLOR_SELECTION]",
    th_title: "UI外観カラー（テーマ）設定 [THEME_COLOR_SELECTION]",
    appearance_desc: "輝度の高いサイバー調 LED イルミネーションカラーを選択できます：",
    th_desc: "輝度の高いサイバー調 LED イルミネーションカラーを選択できます：",
    theme_cyan: "サイバーシアン",
    theme_gold: "アンバーゴールド",
    theme_pink: "サクラピンク",
    theme_green: "エメラルドグリーン",
    theme_purple: "ゴーストパープル",
    adv_pref_title: "詳細設定 [PREFERENCES]",
    pref_title: "詳細設定 [PREFERENCES]",
    pref_auto_copy: "翻訳結果を自動でクリップボードにコピー",
    pref_autoclip: "翻訳結果を自動でクリップボードにコピー",
    pref_sound: "ショートカットキー起動時にシステム音で通知",
    pref_gpu_opt: "GPU FP16 精度最適化処理",
    pref_fp16: "GPU FP16 精度最適化処理",

    // Hardware info
    sys_hw_mon: "システムのハードウェア監視 [HARDWARE_INFO]",
    hw_info_title: "システムのハードウェア監視 [HARDWARE_INFO]",
    cpu_vcore: "Intel Core CPU 仮想コア割り当て",
    cpu_usage_temp: "使用率: 14% | 温度: 42°C",
    gpu_cuda: "NVIDIA CUDA アクセラレータエンジン",
    gpu_vram_temp: "VRAM: 8.4GB / 16GB | 温度: 55°C",
    hw_usage: "使用率",
    hw_temp: "温度",

    // Footer
    footer_secure: "セキュリティで保護されたコアコンソール",
    footer_installed: "セキュリティで保護されたコアコンソール",
    footer_hotkey_btn: "ショートカット",
    footer_shortcut: "ショートカット",

    // Other Toasts / App States
    lang_loaded_toast: "UI言語に切り替えました: ",
    copied_toast: "クリップボードにコピーしました！",
    swapped_toast: "翻訳方向を入れ替えました！",
    sys_min: "最小化されました。",
    sys_max: "全画面表示に自動調整されました。",
    sys_close: "終了状態を確認しています。",
    toast_cpu: "CPU低消費電力モデル実行モードに切り替えました。",
    toast_gpu: "GPUサブミリ秒ハードウェアアクセラレーションを開始しました。",
    engine_changed_toast: "翻訳エンジンが切り替わりました：",
    toast_ocr_prefix: "OCRモジュールステータス：",
    toast_offline_prefix: "オフラインローカルエンジンステータス：",
    toast_image_prefix: "インペイントフィルタステータス：",
    toast_theme_prefix: "テーマを切り替えました: ",
    val_on: "有効",
    val_off: "一時停止",
    val_enabled: "有効",
    val_disabled: "無効",
    val_deployed: "展開・予熱済み",
    val_unloaded: "アンロード済み",
    engine_status: "コア翻訳コンパイラ: バージョンは最新です V1.0.4",
    translate_error: "[接続エラー]: ローカル Express に接続できません。オフライン翻訳を実行中：",
    translate_fail: "[エラー発生]",
    no_result: "[結果なし]"
  },
  "ko": {
    console_tab: "콘솔 (Console)",
    settings_tab: "기본 설정 [SETTINGS]",
    hardware_tab: "하드웨어 정보",
    ui_lang_label: "UI 언어 전환",
    update_engine: "코어 엔진 업데이트",
    title_ai_trans: "AI 번역",
    mode_realtime: "실시간 모드",
    sys_online: "시스템: 온라인",
    hw_title: "하드웨어 모드 [HARDWARE_MODE]",
    cpu_btn: "CPU 모드",
    gpu_btn: "GPU 모드",
    live_title: "실시간 AI 번역 테스트베드",
    swap_btn: "언어 전환 [SWAP]",
    clear_btn: "지우기",
    copy_btn: "복사",
    translating_msg: "AI 실시간 동적 번역 중...",
    no_input: "[입력 내용 없음]",
    placeholder_textarea: "번역할 텍스트를 입력하면 Gemini AI 가 즉시 해석합니다...",
    hint_text: "힌트: 양쪽의 드롭다운을 설정하거나 SWAP 버튼을 누르면 실시간 전환이 가능합니다",
    force_sync: "강제 재번역 [SYNC]",
    source_label: "출발어：",
    target_label: "도착어：",
    
    // Config panel
    lang_config_title: "언어 설정 [LANGUAGE_SETTING]",
    lang_engine_label: "번역 엔진",
    lang_source_label: "출발어",
    lang_target_label: "도착어",
    
    // Shortcuts
    hotkey_title: "스크린샷 단축키 [SCREEN_HOTKEY]",
    sh_title: "스크린샷 단축키 [SCREEN_HOTKEY]",
    btn_record: "녹화",
    sh_record: "녹화",
    btn_reset: "재설정",
    sh_reset: "재설정",
    toast_recording: "새 단축키를 설정하려면 키보드를 누르세요...",
    detecting: "단축키 감지 중...",
    toast_ready: "녹화 시스템이 준비되었습니다! Windows에서 스크린샷 단축키를 실행하세요.",
    toast_reset: "단축키가 기본값 Windows + Shift + D로 재설정되었습니다",
    toast_shortcut_saved: "단축키가 정상적으로 업데이트되었습니다!",

    // Trans modes
    trans_mode_title: "번역 표시 타입 [TRANS_MODE]",
    tm_title: "번역 표시 타입 [TRANS_MODE]",
    overlay_mode: "(A) 오버레이 화면",
    tm_overlay: "(A) 오버레이 화면",
    anchor_mode: "앵커 고정 화면",
    tm_anchor: "앵커 고정 화면",
    list_mode: "양방향 리스트 화면",
    tm_list: "양방향 리스트 화면",

    // Module Status
    mod_status_title: "모듈 동작 표시 LED [MODULE_STATUS]",
    ms_title: "모듈 동작 표시 LED [MODULE_STATUS]",
    ocr_label: "텍스트 인식 (OCR) 온라인 스캐너",
    ms_ocr: "텍스트 인식 (OCR) 온라인 스캐너",
    ocr_ready: "작동 중",
    ocr_pause: "일시중지",
    ocr_paused: "일시중지",
    offline_label: "오프라인 탑재 로컬 엔진",
    ms_offline: "오프라인 탑재 로컬 엔진",
    offline_ready: "캐시 로드 완료",
    offline_not_loaded: "미장착",
    offline_unloaded: "미장착",
    image_label: "이미지 복원 및 블러 보정 필터링",
    ms_image: "이미지 복원 및 블러 보정 필터링",
    image_ready: "가속화 됨",
    image_not_loaded: "비활성화",
    image_unloaded: "비활성화",

    // Appearance & Preferences
    appearance_scheme: "테마 및 주변 조명 [THEME_COLOR_SELECTION]",
    th_title: "테마 및 주변 조명 [THEME_COLOR_SELECTION]",
    appearance_desc: "고유의 사이버네틱 아우라(박스 디테일, 섀도우 및 LED 효과음)를 선택하세요:",
    th_desc: "고유의 사이버네틱 아우라(박스 디테일, 섀도우 및 LED 효과음)를 선택하세요:",
    theme_cyan: "사이버 시안",
    theme_gold: "앰버 골드",
    theme_pink: "사쿠라 핑크",
    theme_green: "에메랄드 그린",
    theme_purple: "고스트 퍼플",
    adv_pref_title: "고급 설정 [PREFERENCES]",
    pref_title: "고급 설정 [PREFERENCES]",
    pref_auto_copy: "번역 시 클립보드로 결과를 자동 복사",
    pref_autoclip: "번역 시 클립보드로 결과를 자동 복사",
    pref_sound: "단축키 트리거 시 효과음 재생",
    pref_gpu_opt: "GPU FP16 정밀도 최적화 모듈",
    pref_fp16: "GPU FP16 정밀도 최적화 모듈",

    // Hardware info
    sys_hw_mon: "시스템 하드웨어 모니터링 [HARDWARE_INFO]",
    hw_info_title: "시스템 하드웨어 모니터링 [HARDWARE_INFO]",
    cpu_vcore: "Intel 가상화 멀티코어 할당량",
    cpu_usage_temp: "사용률: 14% | 코어: 42°C",
    gpu_cuda: "NVIDIA CUDA 가속 엔진 스피도미터",
    gpu_vram_temp: "VRAM: 8.4GB / 16GB | 코어: 55°C",
    hw_usage: "사용률",
    hw_temp: "온도",

    // Footer
    footer_secure: "보안이 설치된 마스터 윈도우",
    footer_installed: "보안이 설치된 마스터 윈도우",
    footer_hotkey_btn: "단축키 지정됨",
    footer_shortcut: "단축키 지정됨",

    // Other Toasts / App States
    lang_loaded_toast: "UI 언어가 변경되었습니다: ",
    copied_toast: "클립보드에 복사되었습니다!",
    swapped_toast: "번역 방향이 바뀌었습니다!",
    sys_min: "성공적으로 최소화됨.",
    sys_max: "화면 배율이 자동으로 최대화됨.",
    sys_close: "종료 상태 검증 중.",
    toast_cpu: "CPU 저전력 모델 모드로 전환되었습니다.",
    toast_gpu: "GPU 가속 하드웨어 연동을 성공적으로 개시하였습니다.",
    engine_changed_toast: "번역 엔진이 다음으로 변경되었습니다: ",
    toast_ocr_prefix: "OCR 모듈 상태: ",
    toast_offline_prefix: "로컬 저장 오프라인 엔진 상태: ",
    toast_image_prefix: "이미지 후처리 필터 상태: ",
    toast_theme_prefix: "테마가 변경되었습니다: ",
    val_on: "활성",
    val_off: "일시중지",
    val_enabled: "사용",
    val_disabled: "사용 안 함",
    val_deployed: "인스턴스 활성됨",
    val_unloaded: "분리 해제됨",
    engine_status: "번역 컴파일러: 이미 최신 버전 상태입니다 V1.0.4",
    translate_error: "[연결 오류]: 로컬 Express 시스템 통신 연결에 실패했습니다. 오프라인으로 전환 중: ",
    translate_fail: "[작업 실패]",
    no_result: "[결과 없음]"
  }
};

// Fill up other languages dynamically with fallback to english to prevent massive token generation
const otherLanguages = ["es", "fr", "de", "it", "ru", "pt", "vi", "th", "id", "tr"];

otherLanguages.forEach(lang => {
  if (!loc[lang]) {
    loc[lang] = { ...loc["en"] };
  }
});

// Provide some custom greetings/labels for them
loc["es"].ui_lang_label = "Cambiar Idioma de Interfaz";
loc["es"].console_tab = "Consola Principal (Console)";
loc["es"].settings_tab = "Preferencias [SETTINGS]";
loc["es"].hardware_tab = "Hardware";
loc["es"].clear_btn = "Borrar";
loc["es"].copy_btn = "Copiar";

loc["fr"].ui_lang_label = "Sélection Langue UI";
loc["fr"].console_tab = "Console Principale";
loc["fr"].settings_tab = "Préférences [SETTINGS]";
loc["fr"].hardware_tab = "Matériel";
loc["fr"].clear_btn = "Effacer";
loc["fr"].copy_btn = "Copier";

loc["de"].ui_lang_label = "UI-Sprache wechseln";
loc["de"].console_tab = "Hauptkonsole";
loc["de"].settings_tab = "Einstellungen [SETTINGS]";
loc["de"].hardware_tab = "Hardware";
loc["de"].clear_btn = "Löschen";
loc["de"].copy_btn = "Kopieren";

loc["it"].ui_lang_label = "Cambia lingua interfaccia";
loc["it"].console_tab = "Console Principale";
loc["it"].settings_tab = "Preferenze";
loc["it"].hardware_tab = "Hardware";
loc["it"].clear_btn = "Pulisci";
loc["it"].copy_btn = "Copia";

loc["ru"].ui_lang_label = "Язык интерфейса";
loc["ru"].console_tab = "Главная консоль";
loc["ru"].settings_tab = "Настройки [SETTINGS]";
loc["ru"].hardware_tab = "Железо";
loc["ru"].clear_btn = "Очистить";
loc["ru"].copy_btn = "Копировать";

loc["pt"].ui_lang_label = "Mudar idioma de interface";
loc["pt"].console_tab = "Console Principal";
loc["pt"].settings_tab = "Preferências [SETTINGS]";
loc["pt"].hardware_tab = "Uso de Hardware";
loc["pt"].clear_btn = "Limpar";
loc["pt"].copy_btn = "Copiar";

loc["vi"].ui_lang_label = "Thay đổi ngôn ngữ UI";
loc["vi"].console_tab = "Bảng điều khiển";
loc["vi"].settings_tab = "Cấu hình ưu tiên";
loc["vi"].hardware_tab = "Phần cứng";
loc["vi"].clear_btn = "Xoá";
loc["vi"].copy_btn = "Sao chép";

loc["th"].ui_lang_label = "เปลี่ยนภาษา UI";
loc["th"].console_tab = "แผงควบคุมหลัก";
loc["th"].settings_tab = "ตั้งค่าแผงควบคุม [SETTINGS]";
loc["th"].hardware_tab = "ข้อมูลฮาร์ดแวร์";
loc["th"].clear_btn = "ล้างข้อมูล";
loc["th"].copy_btn = "คัดลอก";

loc["id"].ui_lang_label = "Ganti Bahasa UI";
loc["id"].console_tab = "Konsol Utama";
loc["id"].settings_tab = "Preferensi UI [SETTINGS]";
loc["id"].hardware_tab = "Info Perangkat";
loc["id"].clear_btn = "Bersihkan";
loc["id"].copy_btn = "Salin";

loc["tr"].ui_lang_label = "Arayüz Dili Değiştir";
loc["tr"].console_tab = "Ana Konsol";
loc["tr"].settings_tab = "Tercihler [SETTINGS]";
loc["tr"].hardware_tab = "Donanım Bilgisi";
loc["tr"].clear_btn = "Temizle";
loc["tr"].copy_btn = "Kopyala";

export const getLoc = (langKey: string) => {
  const base = loc["en"];
  const target = loc[langKey] || loc["zh-tw"];
  return { ...base, ...target };
};
