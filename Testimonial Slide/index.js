const testimonials = [
  {
    name: "- Sarah Johnson",
    photoUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=1000&auto=format&fit=crop&  q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "I am so impressed with Apple's mobile products. Their sleek design and user-friendly interface make them stand out from the competition."
  },
  {
    name: "- Samantha Roberts",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    text: "I am beyond thrilled with the mobile device from Apple. The sleek design and top-notch performance exceed my expectations."
  },
  {
    name: "- Jessica Thompson",
    photoUrl: "https://plus.unsplash.com/premium_photo-1670071482460-5c08776521fe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    text: "I am beyond impressed with Apple's mobile devices. The sleek design and cutting-edge technology are unmatched."
  }
];
const imageEl = document.querySelector(".user-image");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");
let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imageEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.lenght) {
    idx = 0;
  } else {
    console.error("Testimonial is undefined");
}
  setTimeout(() => {
    updateTestimonial();
  },1000)
}