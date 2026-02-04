/* LANGUAGE TOGGLE */
let isBangla = false;

function toggleLanguage(){
  isBangla = !isBangla;
  document.querySelector(".lang-btn").innerText = isBangla ? "English" : "বাংলা";
  document.querySelector(".hero h1").innerText = isBangla ? "২৪×৭ জরুরি অ্যাম্বুলেন্স পরিষেবা" : "24×7 Emergency Ambulance Service";
  document.querySelector(".hero p").innerText = isBangla ? "দ্রুত • নির্ভরযোগ্য • ICU ও কার্ডিয়াক অ্যাম্বুলেন্স" : "Fast • Reliable • ICU & Cardiac Ambulance Available";
  document.querySelector(".services h2").innerText = isBangla ? "আমাদের অ্যাম্বুলেন্স পরিষেবা" : "Our Ambulance Services";
  document.querySelector(".booking h2").innerText = isBangla ? "এখনই অ্যাম্বুলেন্স বুক করুন" : "Book Ambulance Now";
}

/* LIVE LOCATION */
function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      document.getElementById("location").value = `https://maps.google.com/?q=${lat},${lon}`;
    });
  } else {
    alert("Location not supported");
  }
}

/* WHATSAPP BOOKING */
document.getElementById("bookingForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let location = document.getElementById("location").value;
  let drop = document.getElementById("drop").value;
  let service = document.getElementById("service").value;

  let message = `🚑 RAPID360WHEELS Booking%0APatient Name: ${name}%0AMobile: ${phone}%0APickup Location: ${location}%0ADrop Location: ${drop}%0AService: ${service}`;

  window.open(`https://wa.me/917001577240?text=${message}`, "_blank");
});