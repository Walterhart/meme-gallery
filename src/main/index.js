import { catsData } from "../data/data.js";

// Get DOM elements
const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const gifsOnlyOption = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");
const memeModalCloseBtn = document.getElementById("meme-modal-close-btn");

// Event listeners
emotionRadios.addEventListener("change", highlightCheckedOption);
memeModalCloseBtn.addEventListener("click", closeModal);
getImageBtn.addEventListener("click", renderCat);

// Function to highlight the checked option
function highlightCheckedOption(e) {
  const radios = document.getElementsByClassName("radio");
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

// Function to close the modal
function closeModal() {
  memeModal.style.display = "none";
}

// Function to render a cat image
function renderCat() {
    const catObject = getSingleCatObject();
  
    if (catObject) {
      memeModalInner.innerHTML = `
        <img 
            class="cat-img" 
            src="../asset/images/${catObject.image}"
            alt="${catObject.alt}"
        >
      `;
      memeModal.style.display = 'flex';
    } else {
      console.log('No matching cat found.'); // or display an error message
    }
  }
  
// Function to get a single cat object
function getSingleCatObject() {
  const catsArray = getMatchingCatsArray();

  if (catsArray.length === 1) {
    return catsArray[0];
  } else {
    const randomNumber = Math.floor(Math.random() * catsArray.length);
    return catsArray[randomNumber];
  }
}

// Function to get an array of cats that match the selected emotion and option
function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector('input[type="radio"]:checked').value;
    const isGif = gifsOnlyOption.checked;
    
    const matchingCatsArray = catsData.filter(function(cat) {
      if (isGif) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
      } else {
        return cat.emotionTags.includes(selectedEmotion);
      }
    });

    return matchingCatsArray;
  }

  // Return an empty array when no emotion is selected
  return [];
}


// Function to get an array of unique emotions from the cats data
function getEmotionsArray(cats) {
  const emotionsArray = Array.from(
    new Set(cats.flatMap((cat) => cat.emotionTags))
  );
  return emotionsArray;
}

// Function to render emotion radios based on the cats data
function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);

  const radioItems = emotions
    .map(
      (emotion) => `
    <div class="radio">
        <label for="${emotion}">${emotion}</label>
        <input
            type="radio"
            id="${emotion}"
            value="${emotion}"
            name="emotions"
        >
    </div>
  `
    )
    .join("");

  emotionRadios.innerHTML = radioItems;
}

// Render the emotion radios initially
renderEmotionsRadios(catsData);
