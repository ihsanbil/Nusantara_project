const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');

// Definisikan pertanyaan-pertanyaan dan jawaban-jawaban
const questions = [
    "Apakah Anda sering merasa cemas?",
    "Apakah Anda mudah marah atau kesal?",
    "Apakah Anda sering merasa sedih atau depresi?",
    "Apakah Anda merasa kesulitan tidur?",
    "Apakah Anda merasa kesulitan berkonsentrasi?",
    "Apakah Anda merasa kehilangan minat pada aktivitas yang biasanya Anda nikmati?",
    "Apakah Anda sering merasa stres?",
    "Apakah Anda merasa gelisah atau tidak tenang?",
    "Apakah Anda sering merasa kelelahan atau lelah?",
    "Apakah Anda merasa tertekan atau putus asa?",
    "Apakah Anda merasa sulit untuk mengontrol pikiran atau perasaan Anda?",
    "Apakah Anda merasa kesulitan untuk berpikir jernih atau membuat keputusan?",
    "Apakah Anda merasa mudah lelah atau kehabisan tenaga?",
    "Apakah Anda merasa khawatir akan masa depan?",
    "Apakah Anda merasa sulit untuk beristirahat atau bersantai?",
    "Apakah Anda merasa sulit untuk menikmati makanan atau aktivitas lainnya?",
    "Apakah Anda merasa tegang atau kaku di tubuh Anda?",
    "Apakah Anda merasa kurang percaya diri atau meragukan diri sendiri?",
    "Apakah Anda merasa kesulitan untuk mendapatkan bantuan atau dukungan dari orang lain?",
    "Apakah Anda merasa sulit untuk mengendalikan perubahan suasana hati?",
    "Apakah Anda merasa sulit untuk menangani tekanan atau tuntutan pekerjaan?",
    "Apakah Anda merasa sulit untuk menahan amarah atau kekecewaan?",
    "Apakah Anda merasa sulit untuk berbicara tentang perasaan Anda dengan orang lain?",
    "Apakah Anda merasa sering merasa cemas tentang kesehatan Anda?",
    "Apakah Anda merasa kesulitan untuk berhenti memikirkan masalah atau situasi tertentu?"
];

// Tampilkan pertanyaan dan jawaban di halaman
function displayQuiz() {
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <h2>${question}</h2>
            <input type="radio" id="yes-${index}" name="answer-${index}" value="Ya">
            <label for="yes-${index}">Ya</label>
            <input type="radio" id="no-${index}" name="answer-${index}" value="Tidak">
            <label for="no-${index}">Tidak</label>
        `;
        quizContainer.appendChild(questionDiv);
    });
}

// Fungsi untuk menentukan hasil berdasarkan jawaban
// Fungsi untuk menentukan hasil berdasarkan jawaban
function calculateResult() {
    // Logika penentuan hasil berdasarkan jawaban quiz
    // Implementasikan logika pohon keputusan di sini
    // Misalnya, berdasarkan jumlah jawaban "Ya" pada pertanyaan-pertanyaan tertentu
    let result = "Hasil belum ditentukan";
    // Contoh logika sederhana
    const answers = [];
    questions.forEach((question, index) => {
        const answerValue = document.querySelector(`input[name="answer-${index}"]:checked`).value;
        answers.push(answerValue);
    });

    // Implementasikan logika pohon keputusan di sini
    if (answers[0] === 'Ya' && answers[1] === 'Ya') {
        result = "Anda mungkin memiliki tingkat kecemasan yang tinggi. Disarankan untuk berkonsultasi dengan seorang psikolog.";
    } else if (answers[0] === 'Tidak' && answers[1] === 'Tidak') {
        result = "Anda mungkin sedang dalam kondisi yang baik secara emosional.";
    } else {
        result = "Hasil tidak bisa ditentukan dengan jawaban yang diberikan. Disarankan untuk berkonsultasi dengan seorang psikolog.";
    }

    return result;
}


// Event listener untuk tombol submit
submitButton.addEventListener('click', () => {
    const result = calculateResult();
    alert(`Hasil quiz: ${result}`);
});

// Panggil fungsi untuk menampilkan quiz
displayQuiz();
