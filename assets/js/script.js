document.addEventListener('DOMContentLoaded', function() {

    const languageData = {
        id: {
            pageTitle: "UTS - Manajemen Teknologi",
            mainTitle: "UJIAN TENGAH SEMESTER",
            courseName: "Mata Kuliah: Manajemen Teknologi",
            lecturerName: "Dosen: A. RAHMAN",
            deadlineInfo: "Batas Waktu Pengumpulan:",
            tabMCQ: "Pilihan Ganda",
            tabEssay: "Soal Uraian",
            tabCaseStudy: "Studi Kasus Digital",
            mcqTitle: "Bagian A: Pilihan Ganda",
            mcqInstruction: "Pilihlah satu jawaban yang paling tepat. Anda dapat memeriksa jawaban setelah selesai.",
            mcq1_q: "1. Fokus fundamental dari Manajemen Teknologi (MT) adalah...",
            mcq1_a: "a. Mengoptimalkan efisiensi teknis dari setiap perangkat keras dan lunak.",
            mcq1_b: "b. Mentransformasi fungsi teknologi dari pusat biaya menjadi penggerak nilai strategis.",
            mcq1_c: "c. Mengelola infrastruktur, data, dan jaringan komunikasi organisasi.",
            mcq1_d: "d. Melakukan riset dan pengembangan (R&D) untuk menciptakan teknologi baru.",
            mcq2_q: "2. Perusahaan yang sedang mengevaluasi vendor CRM dan memutuskan antara 'make' vs 'buy' berada pada fase...",
            mcq2_a: "a. Fase Seleksi dan Akuisisi (Selection and Acquisition).",
            mcq2_b: "b. Fase Inisiasi dan Pemindaian (Initiation and Scanning).",
            mcq2_c: "c. Fase Implementasi dan Difusi (Implementation and Diffusion).",
            mcq2_d: "d. Fase Pemanfaatan dan Optimalisasi (Exploitation and Optimization).",
            mcq3_q: "3. Implementasi sistem ERP untuk merampingkan operasi adalah contoh strategi...",
            mcq3_a: "a. Strategi Diferensiasi.",
            mcq3_b: "b. Inovasi Model Bisnis Disruptif.",
            mcq3_c: "c. Strategi Kepemimpinan Biaya.",
            mcq3_d: "d. Aliansi Strategis dengan Pesaing.",
            checkAnswersBtn: "Lihat Kunci Jawaban",
            essayTitle: "Bagian B: Uraian",
            essayInstruction: "Jawablah pertanyaan-pertanyaan berikut dengan jelas, terstruktur, dan komprehensif.",
            essayQ1_title: "4. Perbedaan Fundamental MT dan MTI",
            essayQ1_text: "Jelaskan perbedaan fundamental antara <strong>Manajemen Teknologi (MT)</strong> dan <strong>Manajemen Teknologi Informasi (MTI)</strong>. Berikan satu contoh nyata di sebuah perusahaan untuk memperjelas perbedaan cakupan keduanya.",
            essayQ3_title: "5. Inovasi Proses & Kepemimpinan Biaya",
            essayQ3_text: "Materi ajar menekankan bahwa teknologi adalah katalisator inovasi. Jelaskan bagaimana <strong>inovasi proses</strong> (contoh: otomatisasi, implementasi ERP) dapat secara langsung mendukung pencapaian strategi <strong>keunggulan kompetitif berbasis kepemimpinan biaya (cost leadership)</strong>.",
            essayQ4_title: "6. Analisis Kegagalan Implementasi Teknologi",
            essayQ4_text: "Mengapa sebuah proyek implementasi teknologi yang canggih dan superior secara teknis bisa mengalami kegagalan di sebuah organisasi? Jelaskan jawaban Anda dengan mengacu pada konsep <strong>manajemen perubahan (change management)</strong> dan minimal <strong>tiga (3) faktor non-teknis</strong> lain yang krusial bagi keberhasilan adopsi teknologi.",
            caseTitle: "Bagian C: Studi Kasus Digital",
            caseInstruction: "Pilih <strong>satu</strong> dari platform berikut (Tokopedia, Shopee, BukaLapak atau Blibli) sebagai fokus analisis Anda.",
            caseObjectTitle: "Objek Studi Kasus: Platform E-commerce Indonesia",
            caseTask: "Tugas Anda:",
            caseTaskText: `Menulis esai studi kasus analitis yang menjawab pertanyaan sentral: <br><strong>"Bagaimana platform pilihan Anda menerapkan prinsip-prinsip MT untuk membangun dan mempertahankan keunggulan kompetitifnya?"</strong>`,
            caseImportant: "Penting:",
            caseImportantText: "Seluruh informasi dapat ditemukan secara online (observasi platform, artikel berita, laporan industri). <strong>Anda tidak perlu melakukan wawancara langsung.</strong>",
            caseStructureTitle: "Struktur Esai yang Diharapkan:",
            caseStructure1: "<strong>Analisis Platform sebagai Aset Strategis:</strong> Identifikasi peran platform dan strategi keunggulan kompetitif utamanya.",
            caseStructure2: "<strong>Dekonstruksi Inovasi dan Siklus Hidup Fitur:</strong> Analisis satu fitur baru dan satu fitur matang menggunakan kerangka Siklus Hidup Teknologi.",
            caseStructure3: "<strong>Pemetaan Perjalanan Pelanggan:</strong> Petakan customer journey dan jelaskan mengapa ini adalah wujud Transformasi Digital sejati.",
            caseStructure4: "<strong>Rekomendasi Strategis:</strong> Berikan satu usulan strategis untuk pengembangan platform di masa depan.",
            caseFormatTitle: "Format & Ketentuan:",
            caseFormatText: "Format PDF, 3-5 halaman (tidak termasuk sampul & daftar pustaka), Font Times New Roman 12 / Calibri 11, spasi 1.5.",
            footerText: "Ujian Tengah Semester - Manajemen Teknologi",
        },
        en: {
            pageTitle: "Midterm Exam - Technology Management",
            mainTitle: "MIDTERM EXAMINATION",
            courseName: "Course: Technology Management",
            lecturerName: "Lecturer: A. RAHMAN",
            deadlineInfo: "Submission Deadline for Tasks:",
            tabMCQ: "Multiple Choice",
            tabEssay: "Essay Questions",
            tabCaseStudy: "Digital Case Study",
            mcqTitle: "Part A: Multiple Choice",
            mcqInstruction: "Choose the most appropriate answer. You can check the answers after you have finished.",
            mcq1_q: "1. The fundamental focus of Technology Management (MT) is...",
            mcq1_a: "a. To optimize the technical efficiency of all hardware and software.",
            mcq1_b: "b. To transform the technology function from a cost center into a strategic value driver.",
            mcq1_c: "c. To specifically manage the organization's infrastructure, data, and communication networks.",
            mcq1_d: "d. To conduct research and development (R&D) to create new disruptive technologies.",
            mcq2_q: "2. A company evaluating CRM vendors and deciding between 'make' vs 'buy' is in the phase of...",
            mcq2_a: "a. Selection and Acquisition Phase.",
            mcq2_b: "b. Initiation and Scanning Phase.",
            mcq2_c: "c. Implementation and Diffusion Phase.",
            mcq2_d: "d. Exploitation and Optimization Phase.",
            mcq3_q: "3. Implementing an ERP system to streamline operations is an example of a... strategy.",
            mcq3_a: "a. Differentiation Strategy.",
            mcq3_b: "b. Disruptive Business Model Innovation.",
            mcq3_c: "c. Cost Leadership Strategy.",
            mcq3_d: "d. Strategic Alliance with Competitors.",
            checkAnswersBtn: "Check Answers Key",
            essayTitle: "Part B: Essay Questions",
            essayInstruction: "Answer the following questions clearly, structurally, and comprehensively.",
            essayQ1_title: "4. Fundamental Differences between MT and ITM",
            essayQ1_text: "Explain the fundamental differences between <strong>Technology Management (MT)</strong> and <strong>Information Technology Management (ITM)</strong>. Provide one real-world example in a company to clarify the difference in their scopes.",
            essayQ3_title: "5. Process Innovation & Cost Leadership",
            essayQ3_text: "The course material emphasizes that technology is a catalyst for innovation. Explain how <strong>process innovation</strong> (e.g., automation, ERP implementation) can directly support the achievement of a <strong>competitive advantage based on cost leadership</strong>.",
            essayQ4_title: "6. Analysis of Technology Implementation Failure",
            essayQ4_text: "Why can a technically superior and advanced technology implementation project fail within an organization? Explain your answer by referring to the concept of <strong>change management</strong> and at least <strong>three (3)</strong> other crucial non-technical factors for successful technology adoption.",
            caseTitle: "Part C: Digital Case Study",
            caseInstruction: "Choose <strong>one</strong> of the following platforms (Tokopedia, Shopee, BukaLapak or Blibli) as the focus of your analysis.",
            caseObjectTitle: "Case Study Object: Indonesian E-commerce Platform",
            caseTask: "Your Task:",
            caseTaskText: `Write an analytical case study essay that answers the central question: <br><strong>"How does your chosen platform apply the fundamental principles of MT to build and sustain its competitive advantage?"</strong>`,
            caseImportant: "Important:",
            caseImportantText: "All required information can be found online (platform observation, news articles, industry reports). <strong>You are not required to conduct direct interviews.</strong>",
            caseStructureTitle: "Expected Essay Structure:",
            caseStructure1: "<strong>Platform Analysis as a Strategic Asset:</strong> Identify the platform's role and its primary competitive advantage strategy.",
            caseStructure2: "<strong>Deconstruction of Innovation and Feature Lifecycle:</strong> Analyze one new and one mature feature using the Technology Lifecycle framework.",
            caseStructure3: "<strong>Customer Journey Mapping:</strong> Map the customer journey and explain why it represents a true Digital Transformation.",
            caseStructure4: "<strong>Strategic Recommendation:</strong> Provide one strategic recommendation for the platform's future development.",
            caseFormatTitle: "Format & Guidelines:",
            caseFormatText: "PDF format, 3-5 pages (excluding cover & bibliography), Font Times New Roman 12 / Calibri 11, 1.5 line spacing.",
            footerText: "Midterm Exam - Technology Management",
        }
    };

    const langSwitcher = document.getElementById('lang-switcher');
    
    function setLanguage(lang) {
        document.documentElement.lang = lang;
        const langPack = languageData[lang];
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (langPack[key]) {
                element.innerHTML = langPack[key];
            }
        });
    }

    langSwitcher.addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    // --- Countdown Timer Logic ---
    const deadline = new Date("Jun 27, 2025 23:59:59").getTime(); // Ganti tanggal ini
    const timerInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = deadline - now;
        if (distance < 0) {
            clearInterval(timerInterval);
            document.getElementById("timer").innerHTML = "WAKTU PENGUMPULAN TELAH BERAKHIR";
            return;
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);

    // --- Tab Navigation Logic ---
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const targetTab = button.dataset.tab;
            tabContents.forEach(content => {
                if (content.id === targetTab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // --- MCQ Logic ---
    const mcqOptions = document.querySelectorAll('.options-list li');
    mcqOptions.forEach(option => {
        option.addEventListener('click', () => {
            const parentList = option.parentElement;
            parentList.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    const checkAnswersBtn = document.getElementById('check-answers-btn');
    checkAnswersBtn.addEventListener('click', () => {
        const allQuestions = document.querySelectorAll('.mcq-question');
        allQuestions.forEach(question => {
            const options = question.querySelectorAll('.options-list li');
            options.forEach(option => {
                const isCorrect = option.dataset.correct === 'true';
                const isSelected = option.classList.contains('selected');
                option.classList.remove('correct', 'incorrect');
                if (isCorrect) {
                    option.classList.add('correct');
                } else if (isSelected && !isCorrect) {
                    option.classList.add('incorrect');
                }
            });
        });
    });

    // --- Accordion Logic for Uraian ---
    const accordionBtns = document.querySelectorAll('.accordion-btn');
    accordionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    });

    // Initialize with default language
    setLanguage('id');
});

document.onkeydown = function(e) {
    if(event.keyCode == 123) { // F12
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { // Ctrl+Shift+I
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) { // Ctrl+Shift+J
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) { // Ctrl+U
        return false;
    }
}
