// Firebase SDKの読み込み
const scriptApp = document.createElement('script');
scriptApp.src = "https://www.gstatic.com/firebasejs/9.6.10/firebase-app-compat.js";
scriptApp.defer = true;
document.head.appendChild(scriptApp);

const scriptAuth = document.createElement('script');
scriptAuth.src = "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth-compat.js";
scriptAuth.defer = true;
document.head.appendChild(scriptAuth);

// SDKがロードされたかを監視
scriptAuth.onload = () => {
    // Firebaseの初期化
    const firebaseConfig = {
        apiKey: "AIzaSyBiHjBk7rMiz4Fw7IoLPpFo1FTrQxqy_58",
        authDomain: "acau-3ebcf.firebaseapp.com",
        projectId: "acau-3ebcf",
        storageBucket: "acau-3ebcf.appspot.com",
        messagingSenderId: "407904196633",
    };

    // Firebaseの初期化
    firebase.initializeApp(firebaseConfig);

    // 他のFirebaseの処理もここに記述できます
    console.log("Firebase initialized");
};
