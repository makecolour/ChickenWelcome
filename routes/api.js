var express = require('express');
var router = express.Router();

const TRANSLATIONS = {
    vi: {
        // HERO
        hero_subtitle: "Đào tạo Kỹ sư phần mềm chuẩn Quốc tế",
        hero_desc: "Chương trình tích hợp AI, OJT và cơ hội làm việc toàn cầu ngay từ giảng đường.",

        // WHY FPT
        why_title: "Tại sao chọn SE <br>tại Đại học FPT?",
        why_1_title: "Chuẩn Quốc Tế",
        why_1_desc: "Giáo trình 100% nhập khẩu (McGraw Hill). Tuân thủ chuẩn ACM & ABET.",
        why_2_title: "Thực chiến (OJT)",
        why_2_desc: "100% sinh viên thực tập 4-8 tháng tại doanh nghiệp.",
        why_3_title: "Công dân Toàn cầu",
        why_3_desc: "Thành thạo 2 ngoại ngữ: Anh & Nhật/Trung. Sẵn sàng onsite.",

        // MARKET
        market_title: "Thị trường & <br>Xu hướng 2025",
        market_stat_1: "Thiếu nhân sự IT",
        market_stat_2: "Châu Á Outsourcing",
        market_point_1: "Nhu cầu tuyển dụng tăng mạnh, đặc biệt nhân sự giỏi ngoại ngữ.",
        market_point_2: "Xu hướng dịch chuyển sang: AI, Cloud, Cyber Security.",
        market_opp_title: "Cơ hội vàng cho SV FPT",
        market_opp_desc: "Với nền tảng ngoại ngữ và kinh nghiệm thực tế (BrSE), sinh viên FPT sở hữu lợi thế cạnh tranh vượt trội.",

        // METHODOLOGY
        method_title: "Phương pháp Đào tạo",
        method_tech_title: "Công nghệ & AI",
        method_tech_1: "Phân tích yêu cầu.",
        method_tech_2: "Hỗ trợ lập trình.",
        method_tech_3: "Thiết kế UI/UX.",
        method_tech_4: "Quy trình chuẩn.",
        method_pbl_title: "Project Based Learning",
        method_pbl_1: "Làm dự án ngay từ kỳ đầu tiên.",
        method_pbl_2: "Dự án thực tế: OCOP, Edutech.",
        method_pbl_3: "Rèn luyện kỹ năng Problem Solving.",
        method_pbl_4: "Service Learning: Phục vụ cộng đồng.",

        // ROADMAP SUMMARY
        roadmap_title: "Lộ trình 9 Học kỳ",
        roadmap_1_title: "Chuẩn bị",
        roadmap_1_desc: "Tiếng Anh & Kỹ năng",
        roadmap_2_title: "Nền tảng",
        roadmap_2_desc: "CS Core, Math, Nhật ngữ",
        roadmap_3_title: "Chuyên sâu",
        roadmap_3_desc: "Combo hẹp & Dự án",
        roadmap_4_title: "OJT",
        roadmap_4_desc: "Thực tập Doanh nghiệp",
        roadmap_5_title: "Về đích",
        roadmap_5_desc: "Capstone Project",

        // --- DETAILED JOURNEY (THEO TRÌNH TỰ THỜI GIAN) ---

        prep_label: "Giai đoạn 0 (Pre-University)",
        prep_title: "Tiếng Anh & Kỹ năng hội nhập",
        prep_desc: "Trước khi học cách giao tiếp với máy tính, sinh viên FPT học cách giao tiếp với thế giới. Đây là bước đệm quan trọng để tự tin học tập bằng giáo trình quốc tế.",
        prep_feat_1: "Little UK: Môi trường 100% tiếng Anh, 'sống' trong ngôn ngữ thay vì chỉ học ngữ pháp.",
        prep_feat_2: "Kỹ năng mềm (Soft Skills): Làm việc nhóm, thuyết trình, tranh biện và quản lý cảm xúc.",
        prep_feat_3: "Văn hóa & Thể chất: Rèn luyện Vovinam và Nhạc cụ dân tộc để cân bằng Thân - Tâm - Trí.",

        // Phase 1: Preparation & Foundation
        phase1_label: "Giai đoạn 1 (Kỳ 1-3)",
        phase1_title: "Khởi động & Nền tảng",
        phase1_desc: "Hành trình từ 'Zero' đến 'Hero'. Đây là giai đoạn rèn luyện kỷ luật quân đội, trau dồi ngoại ngữ và xây dựng tư duy lập trình cốt lõi.",
        phase1_feat_1: "Văn hóa & Kỷ luật: Tháng rèn luyện tập trung (Quân sự) & Nhạc cụ dân tộc.",
        phase1_feat_2: "Ngoại ngữ: Tiếng Anh dự bị (Little UK) & Tiếng Nhật sơ cấp.",
        phase1_feat_3: "Tư duy cốt lõi: Nhập môn C, Java (OOP) & Cấu trúc dữ liệu giải thuật.",

        // Phase 2: Specialization
        phase2_label: "Giai đoạn 2 (Kỳ 4-5)",
        phase2_title: "Chuyên sâu & Dự án",
        phase2_desc: "Sinh viên chọn hướng đi chuyên ngành hẹp (Combo) và thực hiện dự án phần mềm hoàn chỉnh đầu tiên theo nhóm.",
        phase2_feat_1: "Chọn Combo: AI, IoT, BridgeSE, .NET/Java...",
        phase2_feat_2: "Dự án SWP391: Làm việc nhóm (Teamwork) theo quy trình Agile/Scrum.",
        phase2_feat_3: "Quy trình phần mềm: Phân tích yêu cầu (SRS) & Kiểm thử (Testing).",

        // Phase 3: OJT
        phase3_label: "Giai đoạn 3 (Kỳ 6)",
        phase3_title: "OJT - Học kỳ Doanh nghiệp",
        phase3_desc: "Rời ghế nhà trường, sinh viên trở thành nhân viên thực tập full-time. Làm việc trong dự án thật với áp lực thật.",
        phase3_feat_1: "Thời gian: 4-8 tháng làm việc tại FPT Software hoặc đối tác.",
        phase3_feat_2: "Trải nghiệm: Tham gia dự án thực tế (Real Projects).",
        phase3_feat_3: "Cơ hội: Nhận lương/trợ cấp và cơ hội ký hợp đồng chính thức.",

        // Phase 4: Advanced
        phase4_label: "Giai đoạn 4 (Kỳ 7-8)",
        phase4_title: "Nâng cao & Khởi nghiệp",
        phase4_desc: "Trở về từ doanh nghiệp với kinh nghiệm thực tế, sinh viên học các công nghệ tiên tiến và tư duy làm chủ sản phẩm.",
        phase4_feat_1: "Công nghệ mới: Lập trình đa nền tảng (Flutter/React Native), Architecture.",
        phase4_feat_2: "Khởi nghiệp: Môn học Entrepreneurship giúp biến ý tưởng thành Startup.",
        phase4_feat_3: "Quản trị: Kỹ năng quản lý dự án (Project Management).",

        // Phase 5: Capstone
        phase5_label: "Giai đoạn 5 (Kỳ 9)",
        phase5_title: "Capstone Project",
        phase5_desc: "Thử thách cuối cùng. Sinh viên bảo vệ đồ án tốt nghiệp - một sản phẩm phần mềm hoàn chỉnh có tính ứng dụng cao.",
        phase5_feat_1: "Sản phẩm: Giải quyết bài toán thực tế của xã hội/doanh nghiệp.",
        phase5_feat_2: "Hội đồng: Bảo vệ trước các chuyên gia và nhà tuyển dụng.",
        phase5_feat_3: "Tương lai: Tấm vé thông hành bước ra thị trường lao động toàn cầu.",

        // TABLES & CLOSING
        curriculum_title: "Lộ trình học chi tiết",
        curriculum_col_name: "Tên Môn Học",
        curriculum_col_term: "Kỳ",
        closing_title: "Sẵn sàng trở thành Kỹ sư phần mềm toàn cầu cùng Đại học FPT.",
        // --- LABS SECTION (TEXT) ---
        labs_title: "Lab Innovation Showcase",
        labs_desc: "Nơi sinh viên hiện thực hóa ý tưởng thành sản phẩm công nghệ.",

        lab_smart_name: "Smart Lab",
        lab_smart_focus: "Trọng tâm: AI, Kỹ thuật phần mềm & Giải pháp Doanh nghiệp",
        lab_dx_name: "DX Lab (Digital Transformation)",
        lab_dx_focus: "Trọng tâm: Hệ thống nhúng, EduTech & Mô phỏng",

        // Projects Title/Desc
        p1_desc: "Hệ thống thông minh sử dụng GPT-4 để phân tích mô hình trì hoãn và tối ưu hóa lịch trình sinh viên.",
        p2_desc: "Nền tảng WebSocket cấp doanh nghiệp hỗ trợ triển khai đa cụm và đồng bộ đa nền tảng.",
        p3_desc: "Giải pháp bán hàng toàn diện cho SME với kho hàng thời gian thực và tích hợp đa thanh toán.",
        p4_desc: "Ứng dụng lịch và lập lịch toàn diện với quản lý sự kiện, nhắc nhở và cộng tác nhóm.", // Calendros

        p5_desc: "Sáng kiến nghiên cứu dài hạn thiết kế và mô phỏng vệ tinh 3D phục vụ giáo dục và thử nghiệm.",
        p6_desc: "Phần mềm chấm thi tự động cho môn PRM, giảm thiểu đáng kể khối lượng công việc thủ công.",
        p7_desc: "Nền tảng tập trung để quản lý thành viên, phân phối dự án và theo dõi kỳ học.",
        p8_desc: "Game mô phỏng 2D trực quan hóa các hoạt động của phòng Lab và hành trình phát triển vệ tinh."
    },
    en: {
        // HERO
        hero_subtitle: "International Standard Software Engineering Training",
        hero_desc: "Integrated AI program, OJT and global working opportunities right from university.",

        // WHY FPT
        why_title: "Why choose SE <br>at FPT University?",
        why_1_title: "International Standard",
        why_1_desc: "100% imported textbooks (McGraw Hill). ACM & ABET compliant.",
        why_2_title: "On-the-Job Training",
        why_2_desc: "100% students intern for 4-8 months at enterprises.",
        why_3_title: "Global Citizen",
        why_3_desc: "Proficient in 2 foreign languages: English & Japanese/Chinese. Ready for onsite.",

        // MARKET
        market_title: "Market & <br>Trends 2025",
        market_stat_1: "IT Personnel Shortage",
        market_stat_2: "Asia Outsourcing",
        market_point_1: "Strong recruitment demand, especially for those proficient in foreign languages.",
        market_point_2: "Trend shift towards: AI, Cloud, Cyber Security.",
        market_opp_title: "Golden Opportunity for FPT Students",
        market_opp_desc: "With foreign language foundation and practical experience (BrSE), FPT students have superior competitive advantages.",

        // METHODOLOGY
        method_title: "Distinctive Methodology",
        method_tech_title: "Technology & AI",
        method_tech_1: "Requirement Analysis.",
        method_tech_2: "Coding Support.",
        method_tech_3: "UI/UX Design.",
        method_tech_4: "Standard Process.",
        method_pbl_title: "Project Based Learning",
        method_pbl_1: "Start projects from the first term.",
        method_pbl_2: "Real projects: OCOP, Edutech.",
        method_pbl_3: "Train Problem Solving skills.",
        method_pbl_4: "Service Learning: Community Service.",

        // ROADMAP SUMMARY
        roadmap_title: "9-Term Roadmap",
        roadmap_1_title: "Preparation",
        roadmap_1_desc: "English & Soft Skills",
        roadmap_2_title: "Foundation",
        roadmap_2_desc: "CS Core, Math, Japanese",
        roadmap_3_title: "Specialization",
        roadmap_3_desc: "Specialized Combo & Project",
        roadmap_4_title: "OJT",
        roadmap_4_desc: "Enterprise Internship",
        roadmap_5_title: "Graduation",
        roadmap_5_desc: "Capstone Project",

        // --- DETAILED JOURNEY ---

        prep_label: "Phase 0 (Pre-University)",
        prep_title: "English & Integration Skills",
        prep_desc: "Before learning to communicate with computers, FPT students learn to communicate with the world. This is a crucial stepping stone to study with international curricula.",
        prep_feat_1: "Little UK: 100% English environment, 'living' the language instead of just learning grammar.",
        prep_feat_2: "Soft Skills: Teamwork, presentation, debate, and emotional intelligence.",
        prep_feat_3: "Culture & Fitness: Vovinam and Traditional Instruments to balance Body - Mind - Spirit.",

        // Phase 1
        phase1_label: "Phase 1 (Term 1-3)",
        phase1_title: "Kickstart & Foundation",
        phase1_desc: "From 'Zero' to 'Hero'. A journey of military discipline, language mastery, and building core programming mindset.",
        phase1_feat_1: "Culture & Discipline: Military Month & Traditional Instruments.",
        phase1_feat_2: "Languages: Preparatory English (Little UK) & Elementary Japanese.",
        phase1_feat_3: "Core Mindset: Intro to C, Java (OOP) & Data Structures Algorithms.",

        // Phase 2
        phase2_label: "Phase 2 (Term 4-5)",
        phase2_title: "Specialization & Project",
        phase2_desc: "Students select a specialized career path (Combo) and execute their first complete team software project.",
        phase2_feat_1: "Select Combo: AI, IoT, BridgeSE, .NET/Java...",
        phase2_feat_2: "SWP391 Project: Teamwork using Agile/Scrum methodology.",
        phase2_feat_3: "Software Process: Requirements (SRS) & Testing.",

        // Phase 3
        phase3_label: "Phase 3 (Term 6)",
        phase3_title: "OJT - On the Job Training",
        phase3_desc: "Leaving the classroom to become full-time interns. Working on real projects with real pressure.",
        phase3_feat_1: "Duration: 4-8 months at FPT Software or partners.",
        phase3_feat_2: "Experience: Joining Real Projects.",
        phase3_feat_3: "Opportunity: Salary/Allowance and official recruitment offers.",

        // Phase 4
        phase4_label: "Phase 4 (Term 7-8)",
        phase4_title: "Advanced & Startup",
        phase4_desc: "Returning with experience, students master advanced tech and equip themselves with a product ownership mindset.",
        phase4_feat_1: "Advanced Tech: Cross-platform (Flutter), Architecture.",
        phase4_feat_2: "Entrepreneurship: Turning ideas into Startups.",
        phase4_feat_3: "Management: Project Management skills.",

        // Phase 5
        phase5_label: "Phase 5 (Term 9)",
        phase5_title: "Capstone Project",
        phase5_desc: "The final challenge. Defending a graduation project - a complete, applicable software product.",
        phase5_feat_1: "Product: Solving real-world problems for society/business.",
        phase5_feat_2: "Defense: Presenting before a council of experts.",
        phase5_feat_3: "Future: The passport to the global labor market.",

        // TABLES & CLOSING
        curriculum_title: "Sample Learning Roadmap",
        curriculum_col_name: "Subject Name",
        curriculum_col_term: "Term",
        closing_title: "Ready to become a Global Software Engineer with FPT University.",
        labs_title: "Lab Innovation Showcase",
        labs_desc: "Where students turn ideas into technological products.",

        lab_smart_name: "Smart Lab",
        lab_smart_focus: "Focus: AI, Software Engineering & Enterprise Solutions",
        lab_dx_name: "DX Lab (Digital Transformation)",
        lab_dx_focus: "Focus: Embedded Systems, EduTech & Simulation",

        p1_desc: "An intelligent system using GPT-4 to analyze procrastination patterns and optimize student schedules.",
        p2_desc: "Enterprise-grade WebSocket platform supporting multi-cluster deployment and seamless cross-platform sync.",
        p3_desc: "Comprehensive point-of-sale solution for SMEs with real-time inventory and multi-payment integration.",
        p4_desc: "Comprehensive calendar & scheduling app with event management, reminders, and collaboration.", // Calendros

        p5_desc: "Long-term research initiative designing and simulating 3D CubeSats for educational and testing purposes.",
        p6_desc: "Automated grading software for PRM exams, significantly reducing manual workload for instructors.",
        p7_desc: "Centralized platform for managing lab members, project distribution, and semester tracking.",
        p8_desc: "2D simulation game visualizing lab activities and the journey towards satellite development."
    }
};

const CURRICULUM_RAW = [
    // PREP: YELLOW THEME
    { stt: 1, code: 'GDQP', nameVn: 'Giáo dục quốc phòng', nameEn: 'Military training', term: 0, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 2, code: 'VOV124', nameVn: 'Vovinam 2', nameEn: 'Vovinam 2', term: 0, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 3, code: 'VOV134', nameVn: 'Vovinam 3', nameEn: 'Vovinam 3', term: 0, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 4, code: 'VOV114', nameVn: 'Vovinam 1', nameEn: 'Vovinam 1', term: 0, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 5, code: 'TRS601', nameVn: 'Tiếng Anh 6 (Thành công Đại học)', nameEn: 'English 6 (University success)', term: 0, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 6, code: 'TMI101', nameVn: 'Nhạc cụ truyền thống', nameEn: 'Traditional musical instrument', term: 0, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },

    // PHASE 1: EMERALD THEME (Term 1-3)
    { isHeader: true, titleVn: 'Học kỳ 1: Nền tảng (Foundation)', titleEn: 'Term 1: Foundation', headerClass: 'text-emerald-400 border-emerald-500', rowClass: 'bg-emerald-500/10' },
    { stt: 7, code: 'SSL101c', nameVn: 'Kỹ năng học tập đại học', nameEn: 'Academic Skills for University Success', term: 1, codeClass: 'text-white', termClass: 'text-emerald-400' },
    { stt: 8, code: 'PRF192', nameVn: 'Cơ sở lập trình (C)', nameEn: 'Programming Fundamentals', term: 1, codeClass: 'text-white', termClass: 'text-emerald-400' },
    { stt: 9, code: 'MAE101', nameVn: 'Toán kỹ thuật', nameEn: 'Mathematics for Engineering', term: 1, codeClass: 'text-white', termClass: 'text-emerald-400' },
    { stt: 10, code: 'CEA201', nameVn: 'Tổ chức và Kiến trúc máy tính', nameEn: 'Computer Organization and Architecture', term: 1, codeClass: 'text-white', termClass: 'text-emerald-400' },
    { stt: 11, code: 'CSI104', nameVn: 'Nhập môn Khoa học máy tính', nameEn: 'Introduction to Computer Science', term: 1, codeClass: 'text-white', termClass: 'text-emerald-400' },

    { isHeader: true, titleVn: 'Học kỳ 2: OOP & Mạng', titleEn: 'Term 2: OOP & Networking', headerClass: 'text-emerald-400 border-emerald-500', rowClass: 'bg-emerald-500/10' },
    { stt: 12, code: 'PRO192', nameVn: 'Lập trình hướng đối tượng (Java)', nameEn: 'Object-Oriented Programming', term: 2, codeClass: 'text-white', termClass: 'text-emerald-400' },
    { stt: 13, code: 'MAD101', nameVn: 'Toán rời rạc', nameEn: 'Discrete mathematics', term: 2, codeClass: 'text-white', termClass: 'text-emerald-400' },
    { stt: 14, code: 'OSG202', nameVn: 'Hệ điều hành', nameEn: 'Operating Systems', term: 2, codeClass: 'text-white', termClass: 'text-emerald-400' },
    { stt: 15, code: 'NWC203c', nameVn: 'Mạng máy tính', nameEn: 'Computer Networking', term: 2, codeClass: 'text-white', termClass: 'text-emerald-400' },
    { stt: 16, code: 'SSG104', nameVn: 'Kỹ năng giao tiếp và làm việc nhóm', nameEn: 'Communication and In-Group Working Skills', term: 2, codeClass: 'text-white', termClass: 'text-emerald-400' },

    { isHeader: true, titleVn: 'Học kỳ 3: CTDL & CSDL', titleEn: 'Term 3: Data Structures & DB', headerClass: 'text-emerald-400 border-emerald-500', rowClass: 'bg-emerald-500/10' },
    { stt: 17, code: 'JPD113', nameVn: 'Tiếng Nhật sơ cấp 1-A1.1', nameEn: 'Elementary Japanese 1-A1.1', term: 3, codeClass: 'text-white', termClass: 'text-emerald-400' },
    { stt: 18, code: 'CSD201', nameVn: 'Cấu trúc dữ liệu và Giải thuật', nameEn: 'Data Structures and Algorithms', term: 3, codeClass: 'text-white', termClass: 'text-emerald-400' },
    { stt: 19, code: 'DBI202', nameVn: 'Nhập môn Cơ sở dữ liệu', nameEn: 'Introduction to Databases', term: 3, codeClass: 'text-white', termClass: 'text-emerald-400' },
    { stt: 20, code: 'LAB211', nameVn: 'Thực hành OOP với Java', nameEn: 'OOP with Java Lab', term: 3, codeClass: 'text-white', termClass: 'text-emerald-400' },
    { stt: 21, code: 'WED201c', nameVn: 'Thiết kế Web', nameEn: 'Web Design', term: 3, codeClass: 'text-white', termClass: 'text-emerald-400' },

    // PHASE 2: CYAN THEME (Term 4-5)
    { isHeader: true, titleVn: 'Học kỳ 4: Chuyên ngành', titleEn: 'Term 4: Specialization Starts', headerClass: 'text-cyan-400 border-cyan-500', rowClass: 'bg-cyan-500/10' },
    { stt: 22, code: 'MAS291', nameVn: 'Xác suất thống kê', nameEn: 'Statistics and Probability', term: 4, codeClass: 'text-white', termClass: 'text-cyan-400' },
    { stt: 23, code: 'JPD123', nameVn: 'Tiếng Nhật sơ cấp 1-A1.2', nameEn: 'Elementary Japanese 1-A1.2', term: 4, codeClass: 'text-white', termClass: 'text-cyan-400' },
    { stt: 24, code: 'IOT102', nameVn: 'Internet vạn vật (IoT)', nameEn: 'Internet of Things', term: 4, codeClass: 'text-white', termClass: 'text-cyan-400' },
    { stt: 25, code: 'PRJ301', nameVn: 'Phát triển ứng dụng Web Java', nameEn: 'Java Web Application Development', term: 4, codeClass: 'text-white', termClass: 'text-cyan-400' },
    { stt: 26, code: 'SWE201c', nameVn: 'Nhập môn Kỹ thuật phần mềm', nameEn: 'Introduction to Software Engineering', term: 4, codeClass: 'text-white', termClass: 'text-cyan-400' },

    { isHeader: true, titleVn: 'Học kỳ 5: Dự án & Quy trình', titleEn: 'Term 5: Project & Process', headerClass: 'text-cyan-400 border-cyan-500', rowClass: 'bg-cyan-500/10' },
    { stt: 27, code: 'SWP391', nameVn: 'Dự án phát triển ứng dụng', nameEn: 'Application development project', term: 5, codeClass: 'text-white', termClass: 'text-cyan-400' },
    { stt: 28, code: 'ITE302c', nameVn: 'Đạo đức trong CNTT', nameEn: 'Ethics in IT', term: 5, codeClass: 'text-white', termClass: 'text-cyan-400' },
    { stt: 29, code: 'SWR302', nameVn: 'Yêu cầu phần mềm', nameEn: 'Software Requirement', term: 5, codeClass: 'text-white', termClass: 'text-cyan-400' },
    { stt: 30, code: 'SWT301', nameVn: 'Kiểm thử phần mềm', nameEn: 'Software Testing', term: 5, codeClass: 'text-white', termClass: 'text-cyan-400' },
    { stt: 31, code: 'PRN212', nameVn: 'Lập trình đa nền tảng cơ bản (.NET)', nameEn: 'Basis Cross-Platform App Programming With .NET', term: 5, codeClass: 'text-white', termClass: 'text-cyan-400' },

    // PHASE 3: ORANGE THEME (Term 6 - OJT)
    { isHeader: true, titleVn: 'Học kỳ 6: Thực tập (OJT)', titleEn: 'Term 6: OJT', headerClass: 'text-orange-400 border-orange-500', rowClass: 'bg-orange-500/10' },
    { stt: 32, code: 'OJT202', nameVn: 'Thực tập tại doanh nghiệp (OJT)', nameEn: 'On the job training', term: 6, sttClass: 'text-orange-400 font-bold', codeClass: 'text-orange-400', nameClass: 'text-orange-400 font-bold', termClass: 'text-orange-400' },
    { stt: 33, code: 'ENW492c', nameVn: 'Viết bài nghiên cứu', nameEn: 'Writing Research Papers', term: 6, codeClass: 'text-white', termClass: 'text-orange-400' },

    // PHASE 4: PURPLE THEME (Term 7-8)
    { isHeader: true, titleVn: 'Học kỳ 7: Nâng cao & Khởi nghiệp', titleEn: 'Term 7: Advanced & Entrepreneurship', headerClass: 'text-purple-400 border-purple-500', rowClass: 'bg-purple-500/10' },
    { stt: 34, code: 'PMG201c', nameVn: 'Quản trị dự án', nameEn: 'Project management', term: 7, codeClass: 'text-white', termClass: 'text-purple-400' },
    { stt: 35, code: 'PRN222', nameVn: 'Lập trình đa nền tảng nâng cao (.NET)', nameEn: 'Advanced Cross-Platform App Programming With .NET', term: 7, codeClass: 'text-white', termClass: 'text-purple-400' },
    { stt: 36, code: 'EXE101', nameVn: 'Khởi nghiệp thực nghiệm 1', nameEn: 'Experiential Entrepreneurship 1', term: 7, codeClass: 'text-white', termClass: 'text-purple-400' },
    { stt: 37, code: 'PRU212', nameVn: 'Lập trình C# và Unity', nameEn: 'C# Programming and Unity', term: 7, codeClass: 'text-white', termClass: 'text-purple-400' },
    { stt: 38, code: 'SWD392', nameVn: 'Kiến trúc và Thiết kế phần mềm', nameEn: 'SW Architecture and Design', term: 7, codeClass: 'text-white', termClass: 'text-purple-400' },

    { isHeader: true, titleVn: 'Học kỳ 8: Chuyên ngành & Chính trị', titleEn: 'Term 8: Specialized & Politics', headerClass: 'text-purple-400 border-purple-500', rowClass: 'bg-purple-500/10' },
    { stt: 39, code: 'EXE201', nameVn: 'Khởi nghiệp thực nghiệm 2', nameEn: 'Experiential Entrepreneurship 2', term: 8, codeClass: 'text-white', termClass: 'text-purple-400' },
    { stt: 40, code: 'MLN122', nameVn: 'Kinh tế chính trị Mác – Lênin', nameEn: 'Political economics of Marxism – Leninism', term: 8, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 41, code: 'PRN232', nameVn: 'Xây dựng ứng dụng Back-End đa nền tảng (.NET)', nameEn: 'Building Cross-Platform Back-End App With .NET', term: 8, codeClass: 'text-white', termClass: 'text-purple-400' },
    { stt: 42, code: 'MLN111', nameVn: 'Triết học Mác – Lênin', nameEn: 'Philosophy of Marxism – Leninism', term: 8, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 43, code: 'WDU203c', nameVn: 'Thiết kế giao diện/Trải nghiệm người dùng (UI/UX)', nameEn: 'UI/UX Design', term: 8, codeClass: 'text-white', termClass: 'text-purple-400' },
    { stt: 44, code: 'PRM392', nameVn: 'Lập trình di động', nameEn: 'Mobile Programming', term: 8, codeClass: 'text-white', termClass: 'text-purple-400' },

    // PHASE 5: ROSE THEME (Term 9)
    { isHeader: true, titleVn: 'Học kỳ 9: Tốt nghiệp', titleEn: 'Term 9: Graduation', headerClass: 'text-rose-500 border-rose-500', rowClass: 'bg-rose-500/10' },
    { stt: 45, code: 'HCM202', nameVn: 'Tư tưởng Hồ Chí Minh', nameEn: 'Ho Chi Minh Ideology', term: 9, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 46, code: 'MLN131', nameVn: 'Chủ nghĩa xã hội khoa học', nameEn: 'Scientific socialism', term: 9, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 47, code: 'VNR202', nameVn: 'Lịch sử Đảng Cộng sản Việt Nam', nameEn: 'History of Việt Nam Communist Party', term: 9, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 48, code: 'SE_GRA_ELE', nameVn: 'Đồ án tốt nghiệp - Kỹ thuật phần mềm', nameEn: 'Graduation Elective - Software Engineering', term: 9, sttClass: 'pl-4 border-l-4 border-rose-500', codeClass: 'text-rose-500 text-lg', nameClass: 'text-rose-500 text-lg font-bold', termClass: 'text-rose-500 text-lg', rowClass: 'bg-rose-500/10' }
];

const PROJECTS_DATA = {
    smart_lab: [
        {
            id: 'p1', name: "Smart To-Do List", tag: "AI-Powered Task Management", tech: "AI | React | Laravel",
            imgs: ["/images/smart_todo_1.png", "/images/smart_todo_2.png"],
            url: "https://web-track-naver-vietnam-ai-hackatho-ecru.vercel.app/" // Link thật
        },
        {
            id: 'p2', name: "EchoWave", tag: "Real-Time Messaging", tech: "Node.js | Redis | Socket.IO",
            imgs: ["/images/echowave.png"],
            url: "https://echowave.positive.io.vn/chat" // Link thật
        },
        {
            id: 'p3', name: "POSitive", tag: "Next-Gen POS System", tech: "Vue.js | Laravel",
            imgs: ["/images/positive_1.png", "/images/positive_2.png"],
            url: "https://huseduvn-my.sharepoint.com/:f:/g/personal/nguyenthuongquyen_hsgs19_hus_edu_vn/IgDeMvIdpFxaQYW5dP6wLS5TAZvQZCiYZe1YAjpNR17sf40?e=tX7vjE" // Link thật
        },
        {
            id: 'p4', name: "Calendros", tag: "Calendar & Scheduling", tech: "PHP | Blade | Laravel",
            imgs: ["/images/calendros_1.png", "/images/calendros_2.png"],
            url: "https://github.com/makecolour/Calendros" // Link thật
        }
    ],
    dx_lab: [
        {
            id: 'p5', name: "Artificial Satellite", tag: "Aerospace Research", tech: "Embedded | IoT",
            imgs: ["/images/cubesat_1.png", "/images/cubesat_2.png"],
            url: "#" // Chưa có link
        },
        {
            id: 'p6', name: "PRM Exam Grader", tag: "EduTech Automation", tech: "Software Automation",
            imgs: ["/images/prm_grader_1.png", "/images/prm_grader_2.png"],
            url: "#" // Chưa có link
        },
        {
            id: 'p7', name: "Lab Manager", tag: "Internal Tooling", tech: "Web App",
            imgs: ["/images/lab_manager_1.png"],
            url: "#" // Chưa có link
        },
        {
            id: 'p8', name: "Lab Simulator 2D", tag: "Gamification", tech: "Game Dev",
            imgs: ["/images/lab_sim_1.png", "/images/lab_sim_2.png"],
            url: "#" // Chưa có link
        }
    ]
};

router.get('/content', function(req, res, next) {
    const lang = req.query.lang || 'vi';

    const content = TRANSLATIONS[lang];

    const curriculum = CURRICULUM_RAW.map(item => {
        const newItem = { ...item };

        if (newItem.isHeader) {
            newItem.title = lang === 'vi' ? newItem.titleVn : newItem.titleEn;
            delete newItem.titleVn;
            delete newItem.titleEn;
        } else {
            newItem.name = lang === 'vi' ? newItem.nameVn : newItem.nameEn;
            delete newItem.nameVn;
            delete newItem.nameEn;
        }
        return newItem;
    });

    const projects = {
        smart: PROJECTS_DATA.smart_lab.map(p => ({
            ...p,
            desc: content[`${p.id}_desc`] // Map description from Translation
        })),
        dx: PROJECTS_DATA.dx_lab.map(p => ({
            ...p,
            desc: content[`${p.id}_desc`]
        }))
    };

    res.json({
        content: content,
        curriculum: curriculum,
        projects: projects
    });
});

module.exports = router;
