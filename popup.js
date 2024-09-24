// Feature 1: Search for Meaning (Using a Dictionary API)
document.getElementById('searchBtn').addEventListener('click', () => {
    const word = document.getElementById('word').value;
    if (word) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(response => response.json())
        .then(data => {
          document.getElementById('definition').textContent = data[0].meanings[0].definitions[0].definition;
        })
        .catch(() => {
          document.getElementById('definition').textContent = "Word not found.";
        });
    }
  });
  
  // Feature 2: Keep Notes
  document.getElementById('saveNotesBtn').addEventListener('click', () => {
    const notes = document.getElementById('notes').value;
    chrome.storage.sync.set({ 'studyNotes': notes }, () => {
      alert('Notes saved!');
    });
  });
  
  chrome.storage.sync.get('studyNotes', (data) => {
    if (data.studyNotes) {
      document.getElementById('notes').value = data.studyNotes;
    }
  });
  
  // Feature 3: Set Study Alerts
  document.getElementById('setAlertBtn').addEventListener('click', () => {
    const alertTime = new Date(document.getElementById('alertTime').value).getTime();
    if (alertTime) {
      chrome.alarms.create('studyAlert', { when: alertTime });
      alert('Alert set!');
    }
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === 'studyAlert') {
      alert('Time to study!');
    }
  });
  
  // Feature 4: Block Websites
  document.getElementById('blockSitesBtn').addEventListener('click', () => {
    const blockList = document.getElementById('blockList').value.split(',');
    chrome.storage.sync.set({ 'blockList': blockList }, () => {
      alert('Websites will be blocked during study time.');
    });
  });
  
  chrome.storage.sync.get('blockList', (data) => {
    if (data.blockList) {
      document.getElementById('blockList').value = data.blockList.join(',');
    }
  });
  