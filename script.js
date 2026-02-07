let isBangla = false;

function toggleLanguage() {
    isBangla = !isBangla;
    
    // Header & Hero
    document.querySelector(".lang-btn").innerText = isBangla ? "English" : "বাংলা";
    document.querySelector(".hero h1").innerText = isBangla ? "২৪×৭ জরুরি অ্যাম্বুলেন্স পরিষেবা" : "24×7 Emergency Ambulance Service";
    document.querySelector(".hero p").innerText = isBangla ? "দ্রুত • নির্ভরযোগ্য • কলকাতা ও সারা বাংলায় উপলব্ধ" : "Fast • Reliable • Available in Kolkata & West Bengal";
    
    // Section Titles
    document.getElementById("service-title").innerText = isBangla ? "আমাদের সেবাসমূহ" : "Our Ambulance Services";
    document.getElementById("booking-title").innerText = isBangla ? "এখনই বুক করুন" : "Book Ambulance Now";
    
    // About Us Section Language Toggle
const aboutEn = document.getElementById('about-en');
const aboutBn = document.getElementById('about-bn');

if (isBangla) {
    aboutEn.style.display = 'none';
    aboutBn.style.display = 'block';
} else {
    aboutEn.style.display = 'block';
    aboutBn.style.display = 'none';
}
    // Form Placeholders
    if(isBangla) {
        document.getElementById("name").placeholder = "রোগীর নাম";
        document.getElementById("phone").placeholder = "ফোন নম্বর";
        document.getElementById("location").placeholder = "কোথা থেকে নেবেন (ঠিকানা)";
        document.getElementById("drop").placeholder = "কোথায় যাবেন (হাসপাতালের নাম)";
    } else {
        document.getElementById("name").placeholder = "Patient Name";
        document.getElementById("phone").placeholder = "Mobile Number";
        document.getElementById("location").placeholder = "Pickup Location";
        document.getElementById("drop").placeholder = "Drop Location";
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            document.getElementById("location").value = `https://www.google.com/maps?q=${lat},${lon}`;
            alert("Location Captured Successfully!");
        }, function() {
            alert("Unable to get location. Please type manually.");
        });
    } else {
        alert("Geolocation not supported by your browser.");
    }
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let location = document.getElementById("location").value;
    let drop = document.getElementById("drop").value;
    let service = document.getElementById("service").value;

    // Professional WhatsApp Message Format
    let message = `*🚑 NEW AMBULANCE BOOKING - RAPID360WHEELS*%0A%0A` +
                  `*Patient Name:* ${name}%0A` +
                  `*Contact:* ${phone}%0A` +
                  `*Service Type:* ${service}%0A` +
                  `*Pickup:* ${location}%0A` +
                  `*Drop:* ${drop}%0A%0A` +
                  `Please confirm this booking immediately.`;

    window.open(`https://wa.me/917001577240?text=${message}`, "_blank");
});