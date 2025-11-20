var express = require('express');
var router = express.Router();

const TRANSLATIONS = {
    vi: {
        hero_subtitle: "Đào tạo Kỹ sư phần mềm chuẩn Quốc tế",
        hero_desc: "Chương trình tích hợp AI, OJT và cơ hội làm việc toàn cầu ngay từ giảng đường.",
        why_title: "Tại sao chọn SE <br>tại Đại học FPT?",
        why_1_title: "Chuẩn Quốc Tế",
        why_1_desc: "Giáo trình 100% nhập khẩu (McGraw Hill). Tuân thủ chuẩn ACM & ABET. Đối tác: Oracle, Cisco.",
        why_2_title: "Thực chiến (OJT)",
        why_2_desc: "100% sinh viên thực tập 4-8 tháng. Làm dự án thật tại doanh nghiệp ngay từ năm 3.",
        why_3_title: "Công dân Toàn cầu",
        why_3_desc: "Thành thạo 2 ngoại ngữ: Anh & Nhật/Trung. Sẵn sàng làm việc onsite quốc tế.",
        market_title: "Thị trường & <br>Xu hướng 2025",
        market_stat_1: "Thiếu nhân sự IT",
        market_stat_2: "Châu Á Outsourcing",
        market_point_1: "Nhu cầu tuyển dụng tăng mạnh, đặc biệt nhân sự giỏi ngoại ngữ.",
        market_point_2: "Xu hướng dịch chuyển sang: AI, Cloud, Cyber Security.",
        market_opp_title: "Cơ hội vàng cho SV FPT",
        market_opp_desc: "Với nền tảng ngoại ngữ và kinh nghiệm thực tế (BrSE), sinh viên FPT sở hữu lợi thế cạnh tranh vượt trội trên thị trường lao động quốc tế.",
        method_title: "Phương pháp Đào tạo Khác biệt",
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
        combo_title: "Combo Chuyên Sâu <br>(Kỳ 4-5)",
        combo_1_desc: "Deep Learning, TensorFlow. Định hướng AI Engineer, Data Scientist.",
        combo_2_desc: "Hệ thống nhúng, Smart Devices, Automotive Software.",
        combo_3_desc: "CNTT + Tiếng Nhật nâng cao. Cầu nối thị trường Nhật Bản.",
        combo_4_desc: "Hệ thống Enterprise lớn (Microsoft/Spring). Full-stack Dev.",
        ojt_title: "OJT - Thực chiến",
        ojt_subtitle: "On-the-Job Training: Điểm khác biệt.",
        ojt_1: "4 - 8 tháng làm việc full-time.",
        ojt_2: "Địa điểm: FPT Software, Nhật Bản, Malaysia...",
        ojt_3: "Tham gia dự án thật (Real Projects).",
        ojt_4: "Nhận lương & Cơ hội tuyển dụng.",
        capstone_title: "Hoàn thiện Kỹ năng",
        capstone_pm_desc: "Quản trị dự án chuyên nghiệp theo chuẩn Agile/Scrum.",
        capstone_ent_desc: "Khởi nghiệp công nghệ, biến ý tưởng thành sản phẩm.",
        capstone_main_desc: "Sinh viên làm việc theo nhóm để xây dựng một giải pháp phần mềm hoàn chỉnh từ A-Z giải quyết bài toán thực tế.",
        capstone_quote: "Đây là tấm vé thông hành thuyết phục nhất đối với nhà tuyển dụng.",
        curriculum_title: "Lộ trình học ví dụ",
        curriculum_col_name: "Tên Môn Học",
        curriculum_col_term: "Kỳ",
        closing_title: "Sẵn sàng trở thành Kỹ sư phần mềm toàn cầu cùng Đại học FPT."
    },
    en: {
        hero_subtitle: "International Standard Software Engineering Training",
        hero_desc: "Integrated AI program, OJT and global working opportunities right from university.",
        why_title: "Why choose SE <br>at FPT University?",
        why_1_title: "International Standard",
        why_1_desc: "100% imported textbooks (McGraw Hill). ACM & ABET compliant. Partners: Oracle, Cisco.",
        why_2_title: "On-the-Job Training",
        why_2_desc: "100% students intern for 4-8 months. Work on real projects at enterprises from year 3.",
        why_3_title: "Global Citizen",
        why_3_desc: "Proficient in 2 foreign languages: English & Japanese/Chinese. Ready for onsite international work.",
        market_title: "Market & <br>Trends 2025",
        market_stat_1: "IT Personnel Shortage",
        market_stat_2: "Asia Outsourcing",
        market_point_1: "Strong recruitment demand, especially for those proficient in foreign languages.",
        market_point_2: "Trend shift towards: AI, Cloud, Cyber Security.",
        market_opp_title: "Golden Opportunity for FPT Students",
        market_opp_desc: "With foreign language foundation and practical experience (BrSE), FPT students have superior competitive advantages in the global labor market.",
        method_title: "Distinctive Training Methodology",
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
        combo_title: "Specialized Combos <br>(Term 4-5)",
        combo_1_desc: "Deep Learning, TensorFlow. Aiming for AI Engineer, Data Scientist.",
        combo_2_desc: "Embedded systems, Smart Devices, Automotive Software.",
        combo_3_desc: "IT + Advanced Japanese. Bridge to Japanese market.",
        combo_4_desc: "Large Enterprise Systems (Microsoft/Spring). Full-stack Dev.",
        ojt_title: "OJT - Real Combat",
        ojt_subtitle: "On-the-Job Training: The Difference.",
        ojt_1: "4 - 8 months working full-time.",
        ojt_2: "Location: FPT Software, Japan, Malaysia...",
        ojt_3: "Join Real Projects.",
        ojt_4: "Receive salary & Recruitment opportunities.",
        capstone_title: "Skill Perfection",
        capstone_pm_desc: "Professional project management (Agile/Scrum).",
        capstone_ent_desc: "Tech entrepreneurship, turning ideas into products.",
        capstone_main_desc: "Students work in teams to build a complete software solution from A-Z solving real-world problems.",
        capstone_quote: "This is the most convincing pass for employers.",
        curriculum_title: "Sample Learning Roadmap",
        curriculum_col_name: "Subject Name",
        curriculum_col_term: "Term",
        closing_title: "Ready to become a Global Software Engineer with FPT University."
    }
};

const CURRICULUM_RAW = [
    { stt: 1, code: 'GDQP', nameVn: 'Giáo dục quốc phòng', nameEn: 'Military training', term: 0, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 2, code: 'VOV124', nameVn: 'Vovinam 2', nameEn: 'Vovinam 2', term: 0, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 3, code: 'VOV134', nameVn: 'Vovinam 3', nameEn: 'Vovinam 3', term: 0, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 4, code: 'VOV114', nameVn: 'Vovinam 1', nameEn: 'Vovinam 1', term: 0, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 5, code: 'TRS601', nameVn: 'Tiếng Anh 6 (Thành công Đại học)', nameEn: 'English 6 (University success)', term: 0, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 6, code: 'TMI101', nameVn: 'Nhạc cụ truyền thống', nameEn: 'Traditional musical instrument', term: 0, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },

    { isHeader: true, titleVn: 'Học kỳ 1: Nền tảng', titleEn: 'Term 1: Fundamentals', headerClass: 'text-accentGreen border-accentGreen', rowClass: 'bg-accentGreen/10' },
    { stt: 7, code: 'SSL101c', nameVn: 'Kỹ năng học tập đại học', nameEn: 'Academic Skills for University Success', term: 1, codeClass: 'text-white', termClass: 'text-accentGreen' },
    { stt: 8, code: 'PRF192', nameVn: 'Cơ sở lập trình (C)', nameEn: 'Programming Fundamentals', term: 1, codeClass: 'text-white', termClass: 'text-accentGreen' },
    { stt: 9, code: 'MAE101', nameVn: 'Toán kỹ thuật', nameEn: 'Mathematics for Engineering', term: 1, codeClass: 'text-white', termClass: 'text-accentGreen' },
    { stt: 10, code: 'CEA201', nameVn: 'Tổ chức và Kiến trúc máy tính', nameEn: 'Computer Organization and Architecture', term: 1, codeClass: 'text-white', termClass: 'text-accentGreen' },
    { stt: 11, code: 'CSI104', nameVn: 'Nhập môn Khoa học máy tính', nameEn: 'Introduction to Computer Science', term: 1, codeClass: 'text-white', termClass: 'text-accentGreen' },

    { isHeader: true, titleVn: 'Học kỳ 2: OOP & Mạng', titleEn: 'Term 2: OOP & Networking', headerClass: 'text-accentGreen border-accentGreen', rowClass: 'bg-accentGreen/10' },
    { stt: 12, code: 'PRO192', nameVn: 'Lập trình hướng đối tượng (Java)', nameEn: 'Object-Oriented Programming', term: 2, codeClass: 'text-white', termClass: 'text-accentGreen' },
    { stt: 13, code: 'MAD101', nameVn: 'Toán rời rạc', nameEn: 'Discrete mathematics', term: 2, codeClass: 'text-white', termClass: 'text-accentGreen' },
    { stt: 14, code: 'OSG202', nameVn: 'Hệ điều hành', nameEn: 'Operating Systems', term: 2, codeClass: 'text-white', termClass: 'text-accentGreen' },
    { stt: 15, code: 'NWC203c', nameVn: 'Mạng máy tính', nameEn: 'Computer Networking', term: 2, codeClass: 'text-white', termClass: 'text-accentGreen' },
    { stt: 16, code: 'SSG104', nameVn: 'Kỹ năng giao tiếp và làm việc nhóm', nameEn: 'Communication and In-Group Working Skills', term: 2, codeClass: 'text-white', termClass: 'text-accentGreen' },

    { isHeader: true, titleVn: 'Học kỳ 3: CTDL & CSDL', titleEn: 'Term 3: Data Structures & DB', headerClass: 'text-accentGreen border-accentGreen', rowClass: 'bg-accentGreen/10' },
    { stt: 17, code: 'JPD113', nameVn: 'Tiếng Nhật sơ cấp 1-A1.1', nameEn: 'Elementary Japanese 1-A1.1', term: 3, codeClass: 'text-white', termClass: 'text-accentGreen' },
    { stt: 18, code: 'CSD201', nameVn: 'Cấu trúc dữ liệu và Giải thuật', nameEn: 'Data Structures and Algorithms', term: 3, codeClass: 'text-white', termClass: 'text-accentGreen' },
    { stt: 19, code: 'DBI202', nameVn: 'Nhập môn Cơ sở dữ liệu', nameEn: 'Introduction to Databases', term: 3, codeClass: 'text-white', termClass: 'text-accentGreen' },
    { stt: 20, code: 'LAB211', nameVn: 'Thực hành OOP với Java', nameEn: 'OOP with Java Lab', term: 3, codeClass: 'text-white', termClass: 'text-accentGreen' },
    { stt: 21, code: 'WED201c', nameVn: 'Thiết kế Web', nameEn: 'Web Design', term: 3, codeClass: 'text-white', termClass: 'text-accentGreen' },

    { isHeader: true, titleVn: 'Học kỳ 4: Chuyên ngành', titleEn: 'Term 4: Specialization Starts', headerClass: 'text-accentBlue border-accentBlue', rowClass: 'bg-accentBlue/10' },
    { stt: 22, code: 'MAS291', nameVn: 'Xác suất thống kê', nameEn: 'Statistics and Probability', term: 4, codeClass: 'text-white', termClass: 'text-accentBlue' },
    { stt: 23, code: 'JPD123', nameVn: 'Tiếng Nhật sơ cấp 1-A1.2', nameEn: 'Elementary Japanese 1-A1.2', term: 4, codeClass: 'text-white', termClass: 'text-accentBlue' },
    { stt: 24, code: 'IOT102', nameVn: 'Internet vạn vật (IoT)', nameEn: 'Internet of Things', term: 4, codeClass: 'text-white', termClass: 'text-accentBlue' },
    { stt: 25, code: 'PRJ301', nameVn: 'Phát triển ứng dụng Web Java', nameEn: 'Java Web Application Development', term: 4, codeClass: 'text-white', termClass: 'text-accentBlue' },
    { stt: 26, code: 'SWE201c', nameVn: 'Nhập môn Kỹ thuật phần mềm', nameEn: 'Introduction to Software Engineering', term: 4, codeClass: 'text-white', termClass: 'text-accentBlue' },

    { isHeader: true, titleVn: 'Học kỳ 5: Dự án & Quy trình', titleEn: 'Term 5: Project & Process', headerClass: 'text-accentBlue border-accentBlue', rowClass: 'bg-accentBlue/10' },
    { stt: 27, code: 'SWP391', nameVn: 'Dự án phát triển ứng dụng', nameEn: 'Application development project', term: 5, codeClass: 'text-white', termClass: 'text-accentBlue' },
    { stt: 28, code: 'ITE302c', nameVn: 'Đạo đức trong CNTT', nameEn: 'Ethics in IT', term: 5, codeClass: 'text-white', termClass: 'text-accentBlue' },
    { stt: 29, code: 'SWR302', nameVn: 'Yêu cầu phần mềm', nameEn: 'Software Requirement', term: 5, codeClass: 'text-white', termClass: 'text-accentBlue' },
    { stt: 30, code: 'SWT301', nameVn: 'Kiểm thử phần mềm', nameEn: 'Software Testing', term: 5, codeClass: 'text-white', termClass: 'text-accentBlue' },
    { stt: 31, code: 'PRN212', nameVn: 'Lập trình đa nền tảng cơ bản (.NET)', nameEn: 'Basis Cross-Platform App Programming With .NET', term: 5, codeClass: 'text-white', termClass: 'text-accentBlue' },

    { isHeader: true, titleVn: 'Học kỳ 6: Thực tập (OJT)', titleEn: 'Term 6: OJT', headerClass: 'text-accentBlue border-accentBlue', rowClass: 'bg-accentBlue/10' },
    { stt: 32, code: 'OJT202', nameVn: 'Thực tập tại doanh nghiệp (OJT)', nameEn: 'On the job training', term: 6, sttClass: 'text-accentBlue font-bold', codeClass: 'text-accentBlue', nameClass: 'text-accentBlue font-bold', termClass: 'text-accentBlue' },
    { stt: 33, code: 'ENW492c', nameVn: 'Viết bài nghiên cứu', nameEn: 'Writing Research Papers', term: 6, codeClass: 'text-white', termClass: 'text-accentBlue' },

    { isHeader: true, titleVn: 'Học kỳ 7: Nâng cao & Khởi nghiệp', titleEn: 'Term 7: Advanced & Entrepreneurship', headerClass: 'text-white border-white', rowClass: 'bg-white/10' },
    { stt: 34, code: 'PMG201c', nameVn: 'Quản trị dự án', nameEn: 'Project management', term: 7, codeClass: 'text-white', termClass: 'text-white' },
    { stt: 35, code: 'PRN222', nameVn: 'Lập trình đa nền tảng nâng cao (.NET)', nameEn: 'Advanced Cross-Platform App Programming With .NET', term: 7, codeClass: 'text-white', termClass: 'text-white' },
    { stt: 36, code: 'EXE101', nameVn: 'Khởi nghiệp thực nghiệm 1', nameEn: 'Experiential Entrepreneurship 1', term: 7, codeClass: 'text-white', termClass: 'text-white' },
    { stt: 37, code: 'PRU212', nameVn: 'Lập trình C# và Unity', nameEn: 'C# Programming and Unity', term: 7, codeClass: 'text-white', termClass: 'text-white' },
    { stt: 38, code: 'SWD392', nameVn: 'Kiến trúc và Thiết kế phần mềm', nameEn: 'SW Architecture and Design', term: 7, codeClass: 'text-white', termClass: 'text-white' },

    { isHeader: true, titleVn: 'Học kỳ 8: Chuyên ngành & Chính trị', titleEn: 'Term 8: Specialized & Politics', headerClass: 'text-white border-white', rowClass: 'bg-white/10' },
    { stt: 39, code: 'EXE201', nameVn: 'Khởi nghiệp thực nghiệm 2', nameEn: 'Experiential Entrepreneurship 2', term: 8, codeClass: 'text-white', termClass: 'text-white' },
    { stt: 40, code: 'MLN122', nameVn: 'Kinh tế chính trị Mác – Lênin', nameEn: 'Political economics of Marxism – Leninism', term: 8, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 41, code: 'PRN232', nameVn: 'Xây dựng ứng dụng Back-End đa nền tảng (.NET)', nameEn: 'Building Cross-Platform Back-End App With .NET', term: 8, codeClass: 'text-white', termClass: 'text-white' },
    { stt: 42, code: 'MLN111', nameVn: 'Triết học Mác – Lênin', nameEn: 'Philosophy of Marxism – Leninism', term: 8, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 43, code: 'WDU203c', nameVn: 'Thiết kế giao diện/Trải nghiệm người dùng (UI/UX)', nameEn: 'UI/UX Design', term: 8, codeClass: 'text-white', termClass: 'text-white' },
    { stt: 44, code: 'PRM392', nameVn: 'Lập trình di động', nameEn: 'Mobile Programming', term: 8, codeClass: 'text-white', termClass: 'text-white' },

    { isHeader: true, titleVn: 'Học kỳ 9: Tốt nghiệp', titleEn: 'Term 9: Graduation', headerClass: 'text-white border-white', rowClass: 'bg-white/10' },
    { stt: 45, code: 'HCM202', nameVn: 'Tư tưởng Hồ Chí Minh', nameEn: 'Ho Chi Minh Ideology', term: 9, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 46, code: 'MLN131', nameVn: 'Chủ nghĩa xã hội khoa học', nameEn: 'Scientific socialism', term: 9, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 47, code: 'VNR202', nameVn: 'Lịch sử Đảng Cộng sản Việt Nam', nameEn: 'History of Việt Nam Communist Party', term: 9, codeClass: 'text-white', nameClass: 'text-gray-300', termClass: 'text-muted' },
    { stt: 48, code: 'SE_GRA_ELE', nameVn: 'Đồ án tốt nghiệp - Kỹ thuật phần mềm', nameEn: 'Graduation Elective - Software Engineering', term: 9, sttClass: 'pl-4 border-l-4 border-accentGreen', codeClass: 'text-accentGreen text-lg', nameClass: 'text-accentGreen text-lg font-bold', termClass: 'text-accentGreen text-lg', rowClass: 'bg-accentGreen/10' }
];

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

    res.json({
        content: content,
        curriculum: curriculum
    });
});

module.exports = router;
