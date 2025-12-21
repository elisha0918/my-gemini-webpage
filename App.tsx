
import React, { useState, useEffect, useCallback } from 'react';
import {
  Github,
  ExternalLink,
  Mail,
  ChevronRight,
  MousePointer2,
  Play,
  X,
  CalendarDays,
  Settings,
  Coffee,
  TrendingUp,
  Globe,
  CreditCard
} from 'lucide-react';
import { Category, Project, Skill } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Category>('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects: Project[] = [
    {
      id: 12,
      title: "信用卡消費支出分析助手",
      category: "canvas",
      description: "只需上傳信用卡消費 Excel 或 CSV 檔案，Gemini 會自動解析數據、歸納消費類別（餐飲、交通、娛樂等），並生成直觀的消費趨勢報告與省錢理財建議。",
      tech: ["Gemini 2.0", "Data Analysis", "Financial Logic", "Prompt Engineering"],
      icon: <CreditCard className="text-amber-400" />,
      color: "from-amber-500/20 to-orange-500/20",
      demoUrl: "https://gemini.google.com/share/01cb14ab7421"
    },
    {
      id: 10,
      title: "n8n 匯率自動監測與中價計算",
      category: "n8n",
      description: "利用 n8n 定時爬取台灣銀行匯率網頁 HTML 資料，透過 CSS Selector 精準定位數據。系統會自動計算買入與賣出的「匯率中價」，並透過 Line Notify 即時通報。",
      tech: ["n8n", "HTML Scraping", "JavaScript (Logic)", "Line Notify"],
      icon: <Globe className="text-blue-400" />,
      color: "from-blue-500/20 to-cyan-500/20",
      videoUrl: "https://file.notion.so/f/f/970cffe2-2027-45a3-95e8-744689bb8cb3/bb40cc03-954f-4a93-88fa-7ac574a72f55/%E6%88%90%E5%8A%9F%E6%8A%93%E5%88%B0%E5%8C%AF%E7%8E%87%E4%B8%AD%E5%83%B9(%E6%88%AA%E5%9C%96%E5%BD%B1%E7%89%87).mp4?table=block&id=20fdb692-0536-802c-bc1d-d0f3b6f2cb7d&spaceId=970cffe2-2027-45a3-95e8-744689bb8cb3&expirationTimestamp=1766296800000&signature=1QQywhXxFYb16VtF1Pe6JvpIpZ-La9WAL1KEd4ZaTts&downloadName=%E6%88%90%E5%8A%9F%E6%8A%93%E5%88%B0%E5%8C%AF%E7%8E%87%E4%B8%AD%E5%83%B9%28%E6%88%AA%E5%9C%96%E5%BD%B1%E7%89%87%29.mp4",
      demoUrl: "#"
    },
    {
      id: 9,
      title: "n8n 台股收盤數據自動化同步",
      category: "n8n",
      description: "透過 n8n 每日自動抓取證交所與櫃買中心（OTC）的收盤股價數據。系統會自動進行數據清洗與格式化，同步更新至 Notion 投資資料庫，並即時透過 Line Notify 發送報告。",
      tech: ["n8n", "REST API", "Line Notify", "Notion API", "Data Transformation"],
      icon: <TrendingUp className="text-red-400" />,
      color: "from-red-500/20 to-orange-500/20",
      videoUrl: "https://file.notion.so/f/f/970cffe2-2027-45a3-95e8-744689bb8cb3/de669e3d-392d-42d8-83d6-77900222d32a/%E6%88%90%E5%8A%9F%E6%8A%93yahoo%E8%82%A1%E5%83%B9-V1.mp4?table=block&id=275db692-0536-806e-bcb2-da3507794b2b&spaceId=970cffe2-2027-45a3-95e8-744689bb8cb3&expirationTimestamp=1766109600000&signature=9us3-CsmDJ_ALDDd53mSgW68JSfu_a8wKTWuF4pboEI&downloadName=%E6%88%90%E5%8A%9F%E6%8A%93yahoo%E8%82%A1%E5%83%B9-V1.mp4",
      demoUrl: "#"
    },
    {
      id: 7,
      title: "Gemini 智能付款行事曆",
      category: "canvas",
      description: "利用 Gemini 開發的行政輔助工具。同仁可透過下拉式選單快速切換月份，系統會自動生成對應的付款行事曆，並同步標註國定假日。",
      tech: ["Gemini 2.0", "Interactive UI", "Calendar Logic", "Prompt Engineering"],
      icon: <CalendarDays className="text-blue-400" />,
      color: "from-blue-500/20 to-indigo-500/20",
      demoUrl: "https://gemini.google.com/share/31e8f7730092"
    },
    {
      id: 6,
      title: "滑鼠動作自動化錄製工具",
      category: "python",
      description: "基於 Tkinter 與 PyAutoGUI 開發的 GUI 工具，支援滑鼠動作錄製、重播、座標鎖定及文字插入，具備 JSON 序列化儲存功能。",
      tech: ["Python", "Tkinter", "PyAutoGUI", "Pynput", "Multithreading"],
      icon: <MousePointer2 className="text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/20",
      videoUrl: "https://file.notion.so/f/f/970cffe2-2027-45a3-95e8-744689bb8cb3/6d6e7f70-18d1-4711-9c9b-79f29e767692/%E8%85%B3%E6%9C%AC%E6%92%AD%E6%94%BE.mp4?table=block&id=2c5db692-0536-80fd-8322-f297cb697b37&spaceId=970cffe2-2027-45a3-95e8-744689bb8cb3&expirationTimestamp=1766109600000&signature=H2ypwI6LFg38o6STW-Tlae-ky6sRrsliM3gQ5_5NxF8&downloadName=%E8%85%B3%E6%9C%AC%E6%92%AD%E6%94%BE.mp4",
      settingsUrl: "https://file.notion.so/f/f/970cffe2-2027-45a3-95e8-744689bb8cb3/3f730581-6f2f-43aa-aee0-2d6fe7292472/%E8%85%B3%E6%9C%AC%E9%8C%84%E8%A3%BD.mp4?table=block&id=2c5db692-0536-802f-b60c-c9c72f0f9d0d&spaceId=970cffe2-2027-45a3-95e8-744689bb8cb3&expirationTimestamp=1766095200000&signature=MU2AN5HpjU1jl45DzQa55zVh1jj78dHDBLZ5MeKrLr0&downloadName=%E8%85%B3%E6%9C%AC%E9%8C%84%E8%A3%BD.mp4",
      demoUrl: "#"
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  const handleVideoClick = useCallback((url: string) => {
    // Notion file links sometimes need standard window redirection if they are page URLs
    if (url.includes('notion.so') && !url.includes('file.notion.so')) {
      window.open(url, '_blank');
    } else {
      setSelectedVideo(url);
    }
  }, []);

  const skills: Skill[] = [
    { name: "Gemini 指派任務", level: "98%" },
    { name: "n8n 自動導航", level: "95%" },
    { name: "Python 甩手掌櫃", level: "92%" },
    { name: "優雅喝咖啡", level: "100%" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30">
      {/* 導覽列 */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent tracking-tighter">
            Elisha_0918
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold items-center">
            <a href="#home" className="hover:text-blue-400 transition-colors uppercase tracking-widest text-xs">首頁</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors uppercase tracking-widest text-xs">作品展示</a>
            <a href="#about" className="hover:text-blue-400 transition-colors uppercase tracking-widest text-xs">懶人哲學</a>
            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2.5 rounded-full transition-all text-sm font-bold shadow-lg shadow-blue-500/25">
              聯絡合作
            </button>
          </div>
        </div>
      </nav>

      {/* Hero 區塊 */}
      <section id="home" className="pt-40 pb-20 px-6 relative overflow-hidden text-center">
        {/* Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-emerald-600/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-slate-900/50 border border-slate-800 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">不斷研發中 • AI Power 2024</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
            打造 <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 bg-clip-text text-transparent">智能自動化</span><br />的未來
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            很高興能分享我如何透過 <span className="text-white font-medium">Gemini Canvas</span> 開發高效 AI 小工具，並利用 <span className="text-white font-medium">n8n</span> 實現極致自動化工作流。
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a href="#projects" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 font-black rounded-2xl hover:bg-blue-50 transition-all flex items-center justify-center group shadow-2xl shadow-white/5 active:scale-95">
              查看作品清單 <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <div className="flex space-x-4">
              <button className="p-5 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-800 hover:border-slate-700 transition-all text-slate-100 shadow-xl backdrop-blur-sm active:scale-95">
                <Github size={24} />
              </button>
              <button className="p-5 bg-slate-900/50 border border-slate-800 rounded-2xl hover:bg-slate-800 hover:border-slate-700 transition-all text-slate-100 shadow-xl backdrop-blur-sm active:scale-95">
                <Mail size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 作品分類切換 */}
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black mb-4 tracking-tight">精選作品集</h2>
            <p className="text-slate-400 text-base leading-relaxed">彙總目前已在 AI 工具開發、Python 自動化與 n8n 流程的實踐案例，專注於解決實際痛點。</p>
          </div>
          <div className="flex bg-slate-900/50 p-1.5 rounded-2xl border border-slate-800 flex-wrap justify-center shadow-2xl backdrop-blur-sm">
            {(['all', 'canvas', 'python', 'n8n'] as Category[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl capitalize transition-all text-sm font-bold m-1 ${activeTab === tab ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
              >
                {tab === 'all' ? '全部' : tab === 'canvas' ? 'Gemini 工具' : tab === 'python' ? 'Python 工具' : 'n8n 流程'}
              </button>
            ))}
          </div>
        </div>

        {/* 作品網格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/40 border border-slate-800/60 rounded-[2.5rem] overflow-hidden hover:border-blue-500/50 transition-all duration-700 shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm"
            >
              <div className={`absolute -top-10 -right-10 w-48 h-48 bg-gradient-to-br ${project.color} blur-[60px] opacity-30 group-hover:opacity-60 transition-opacity duration-700`}></div>

              <div className="p-10 relative flex flex-col h-full">
                <div className="mb-8 p-4 bg-slate-800/50 w-fit rounded-[1.25rem] shadow-inner border border-slate-700/50">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors duration-300 tracking-tight">{project.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed flex-grow text-[15px]">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2.5 mb-10">
                  {project.tech.map((t) => (
                    <span key={t} className="px-4 py-1.5 bg-slate-800/40 text-slate-300 text-[11px] font-bold rounded-full border border-slate-700/50 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-y-4 gap-x-8 pt-6 border-t border-slate-800/50">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-xs font-black text-blue-400 hover:text-blue-300 transition-colors uppercase tracking-[0.1em]"
                    >
                      <ExternalLink size={16} className="mr-2" /> 線上演示
                    </a>
                  )}
                  {project.videoUrl && (
                    <button
                      onClick={() => handleVideoClick(project.videoUrl!)}
                      className="flex items-center text-xs font-black text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-[0.1em]"
                    >
                      <Play size={16} className="mr-2 fill-current" /> 成果驗收
                    </button>
                  )}
                  {project.settingsUrl && (
                    <button
                      onClick={() => handleVideoClick(project.settingsUrl!)}
                      className="flex items-center text-xs font-black text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-[0.1em]"
                    >
                      <Settings size={16} className="mr-2" /> 流程設定
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 影片燈箱 */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-slate-950/95 backdrop-blur-xl transition-all duration-300">
          <div className="relative w-full max-w-5xl bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-[0_0_100px_rgba(0,0,0,0.5)] scale-in-center">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 p-3 bg-slate-800/80 hover:bg-red-500 text-white rounded-full z-10 transition-all shadow-xl active:scale-90"
            >
              <X size={24} />
            </button>
            <div className="aspect-video bg-black flex items-center justify-center">
              <video
                controls
                autoPlay
                className="w-full h-full shadow-inner"
                src={selectedVideo}
              >
                您的瀏覽器不支援影片播放。
              </video>
            </div>
          </div>
        </div>
      )}

      {/* 關於我 */}
      <section id="about" className="py-24 px-6 bg-slate-900/30 border-y border-slate-800/50 relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block p-4 bg-blue-600/10 text-blue-400 rounded-2xl mb-6 shadow-inner border border-blue-500/20">
              <Coffee size={32} />
            </div>
            <h2 className="text-4xl font-black mb-8 tracking-tight">我的極致懶人哲學</h2>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg">
              <p className="text-xl">
                身處 AI 盛世，我的終極目標就是：<br />
                <span className="text-blue-400 font-black text-3xl md:text-4xl block mt-2">能讓 Gemini 動手的，<br />我絕不親自碰。</span>
              </p>
              <p>
                透過 Python、n8n 和 Gemini，把煩人的瑣事交給 AI 代勞。
              </p>
              <p className="italic text-slate-500 border-l-4 border-slate-800 pl-6 py-2">
                這樣我就可以投入更多思考時間，創作出更多具備價值的作品，而不是花時間在無意義的滑鼠點擊與複製貼上。
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="bg-slate-800/30 p-8 rounded-[2rem] border border-slate-700/50 shadow-2xl backdrop-blur-sm group hover:border-blue-500/30 transition-all">
                <div className="text-xs font-black text-slate-500 mb-3 uppercase tracking-widest">{skill.name}</div>
                <div className="text-3xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors">{skill.level}</div>
                <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-emerald-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 text-center border-t border-slate-900/50">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          <div className="text-xl font-black bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            Elisha_0918
          </div>
          <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.3em]">
            © 2025 Built with React & Gemini. 享受生活。
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
