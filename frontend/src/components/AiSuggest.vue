<template>
  <div class="ai-container">
    <div class="ai-header-label">{{ $t('aiSuggest.headerLabel') }}</div>

    <input
      type="text"
      :placeholder="$t('aiSuggest.inputPlaceholder')"
      v-model="question"
    />
    
    <button @click="getAiSuggestion">
      {{ $t('aiSuggest.buttonText') }}
    </button>

    <p>{{ $t('aiSuggest.disclaimer') }}</p>

    <div v-if="response" class="ai-response">{{ response }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const question = ref('');
const response = ref('');

function getAiSuggestion() {
  // In a real application, you would make an API call here.
  // For demonstration, we'll use a translated mock response.
  if (question.value.toLowerCase().includes('digestion') || question.value.toLowerCase().includes('indigestion')) {
    response.value = t('aiSuggest.mockResponses.digestion');
  } else if (question.value.toLowerCase().includes('skin') || question.value.toLowerCase().includes('acne')) {
    response.value = t('aiSuggest.mockResponses.skin');
  } else if (question.value.toLowerCase().includes('cold') || question.value.toLowerCase().includes('cough')) {
    response.value = t('aiSuggest.mockResponses.coldCough');
  }
  else {
    response.value = t('aiSuggest.mockResponses.default');
  }
  question.value = ''; // Clear input after getting response
}
</script>

<style scoped>
/* ALL STYLES REMAIN UNCHANGED AS REQUESTED, except for the ::before content removal */

.ai-container {
  background: linear-gradient(135deg, #f3fbe3, #e0f2f1);
  border: 2px solid #a5d6a7;
  border-left: 10px solid #66bb6a;
  border-radius: 16px;
  padding: 30px 25px;
  max-width: 700px;
  margin: 40px auto;
  box-shadow: 0 8px 20px rgba(102, 187, 106, 0.3);
  font-family: 'Segoe UI', sans-serif;
  animation: fadeIn 0.6s ease;
  position: relative;
}
/* The actual styling for the label is now applied to .ai-header-label */
.ai-container::before {
  content: ""; /* Removed original content as it's now in HTML for translation */
}
/* The new HTML div .ai-header-label gets the styles */
.ai-header-label {
  position: absolute;
  top: -16px;
  left: 25px;
  background-color: #66bb6a;
  color: white;
  padding: 4px 12px;
  font-weight: bold;
  border-radius: 8px;
  font-size: 14px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.ai-container input {
  width: 100%;
  padding: 14px 18px;
  font-size: 16px;
  border: 2px solid #a5d6a7;
  border-radius: 10px;
  outline: none;
  transition: all 0.3s ease;
  background-color: #fafff5;
  margin-bottom: 15px;
  box-shadow: 0 2px 5px rgba(0, 100, 0, 0.1);
}
.ai-container input::placeholder {
  color: #7cb342;
  font-style: italic;
}
.ai-container input:hover {
  border-color: #66bb6a;
  box-shadow: 0 0 10px rgba(102, 187, 106, 0.3);
  background-color: #ffffff;
}
.ai-container input:focus {
  border-color: #388e3c;
  box-shadow: 0 0 12px rgba(56, 142, 60, 0.4);
  transform: scale(1.01);
}
.ai-container button {
  padding: 12px 24px;
  background-color: #66bb6a;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 15px;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.ai-container button:hover {
  background-color: #388e3c;
  transform: scale(1.02);
}
.ai-container p {
  font-style: italic;
  color: #999;
  margin-top: 10px;
  text-align: center;
}
.ai-response {
  background: #e8f5e9;
  border-left: 5px solid #66bb6a;
  padding: 20px;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 16px;
  line-height: 1.6;
  white-space: pre-line;
  color: #2e7d32;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes fadeInImg {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
.click-animate {
  animation: popOpen 0.4s ease;
}
@keyframes popOpen {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
  100% {
    transform: scale(1);
  }
}

/* Back Button */
.back-btn {
  display: block;
  background-color: #388e3c;
  color: white;
  font-weight: bold;
  padding: 10px 20px;
  margin: 20px auto 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.back-btn:hover {
  background-color: #256029;
}

/* Dark Mode */
body.dark-theme .remedies-title{
  color:white;
}
body.dark-theme {
  background-color: #121212;
  background-image: none;
  color: #f5f5f5;
}
body.dark-theme .ailment-card,
body.dark-theme .remedy-details {
  background-color: #1e1e1e;
  color: #f5f5f5;
  border-color: #444;
}

/* 🌙 Fix remedy text visibility in dark mode */
body.dark-theme .remedy-details {
  background-color: #1e1e1e;
  color: #e4e4e4; /* default text color */
}

body.dark-theme .remedy-details li,
body.dark-theme .remedy-details p,
body.dark-theme .remedy-details td,
body.dark-theme .remedy-details span,
body.dark-theme .remedy-details strong {
  color: #e4e4e4 !important;
}
/* Dark mode styles for the new AI header label */
body.dark-theme .ai-header-label {
    background-color: #22c55e; /* A slightly brighter green for dark mode */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
body.dark-theme .ai-container {
    background: linear-gradient(135deg, #1f1f1f, #282828);
    border-color: #3a3a3a;
    border-left-color: #22c55e;
    box-shadow: 0 8px 20px rgba(34, 197, 94, 0.3);
}
body.dark-theme .ai-container input {
    background-color: #333;
    color: #eee;
    border-color: #555;
    box-shadow: 0 2px 5px rgba(0, 150, 0, 0.15);
}
body.dark-theme .ai-container input::placeholder {
    color: #a7f3d0;
}
body.dark-theme .ai-container input:hover {
    border-color: #22c55e;
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
    background-color: #3a3a3a;
}
body.dark-theme .ai-container input:focus {
    border-color: #16a34a;
    box-shadow: 0 0 12px rgba(34, 197, 94, 0.4);
}
body.dark-theme .ai-container button {
    background-color: #22c55e;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
body.dark-theme .ai-container button:hover {
    background-color: #16a34a;
}
body.dark-theme .ai-container p {
    color: #bbb;
}
body.dark-theme .ai-response {
    background: #282828;
    border-left-color: #22c55e;
    color: #e0e0e0;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
}
</style>