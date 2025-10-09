// Tabla Notation Tool JavaScript

// Data from the provided JSON
const talasData = {
  teentaal: {
    name: "Teentaal",
    devanagari: "तीनताल",
    beats: 16,
    vibhags: [4, 4, 4, 4],
    pattern: ["X", "2", "0", "3"],
    theka: [
      {beat: 1, bol: "धा", laghu: 0}, {beat: 2, bol: "धिन", laghu: 0},
      {beat: 3, bol: "धिन", laghu: 0}, {beat: 4, bol: "धा", laghu: 0},
      {beat: 5, bol: "धा", laghu: 0}, {beat: 6, bol: "धिन", laghu: 0},
      {beat: 7, bol: "धिन", laghu: 0}, {beat: 8, bol: "धा", laghu: 0},
      {beat: 9, bol: "धा", laghu: 0}, {beat: 10, bol: "तिन", laghu: 0},
      {beat: 11, bol: "तिन", laghu: 0}, {beat: 12, bol: "ता", laghu: 0},
      {beat: 13, bol: "ता", laghu: 0}, {beat: 14, bol: "धिन", laghu: 0},
      {beat: 15, bol: "धिन", laghu: 0}, {beat: 16, bol: "धा", laghu: 0}
    ]
  },
  jhaptaal: {
    name: "Jhaptaal",
    devanagari: "झपताल",
    beats: 10,
    vibhags: [2, 3, 2, 3],
    pattern: ["X", "2", "0", "3"],
    theka: [
      {beat: 1, bol: "धी", laghu: 0}, {beat: 2, bol: "ना", laghu: 0},
      {beat: 3, bol: "धी", laghu: 0}, {beat: 4, bol: "धी", laghu: 0},
      {beat: 5, bol: "ना", laghu: 0}, {beat: 6, bol: "ती", laghu: 0},
      {beat: 7, bol: "ना", laghu: 0}, {beat: 8, bol: "धी", laghu: 0},
      {beat: 9, bol: "धी", laghu: 0}, {beat: 10, bol: "ना", laghu: 0}
    ]
  },
  ektaal: {
    name: "Ektaal",
    devanagari: "एकताल",
    beats: 12,
    vibhags: [4, 4, 2, 2],
    pattern: ["X", "0", "2", "0", "3"],
    theka: [
      {beat: 1, bol: "धिन", laghu: 0}, {beat: 2, bol: "धिन", laghu: 0},
      {beat: 3, bol: "धागे", laghu: 0}, {beat: 4, bol: "तिरकिट", laghu: 0},
      {beat: 5, bol: "तू", laghu: 0}, {beat: 6, bol: "ना", laghu: 0},
      {beat: 7, bol: "कत", laghu: 0}, {beat: 8, bol: "ता", laghu: 0},
      {beat: 9, bol: "धागे", laghu: 0}, {beat: 10, bol: "तिरकिट", laghu: 0},
      {beat: 11, bol: "धिन", laghu: 0}, {beat: 12, bol: "ना", laghu: 0}
    ]
  },
  rupak: {
    name: "Rupak",
    devanagari: "रूपक",
    beats: 7,
    vibhags: [3, 2, 2],
    pattern: ["X", "2", "3"],
    theka: [
      {beat: 1, bol: "तिन", laghu: 0}, {beat: 2, bol: "तिन", laghu: 0},
      {beat: 3, bol: "ना", laghu: 0}, {beat: 4, bol: "धी", laghu: 0},
      {beat: 5, bol: "ना", laghu: 0}, {beat: 6, bol: "धी", laghu: 0},
      {beat: 7, bol: "ना", laghu: 0}
    ]
  },
  dadra: {
    name: "Dadra",
    devanagari: "दादरा",
    beats: 6,
    vibhags: [3, 3],
    pattern: ["X", "0"],
    theka: [
      {beat: 1, bol: "धा", laghu: 0}, {beat: 2, bol: "धी", laghu: 0},
      {beat: 3, bol: "ना", laghu: 0}, {beat: 4, bol: "धा", laghu: 0},
      {beat: 5, bol: "तू", laghu: 0}, {beat: 6, bol: "ना", laghu: 0}
    ]
  },
  keherwa: {
    name: "Keherwa",
    devanagari: "कहरवा",
    beats: 8,
    vibhags: [4, 4],
    pattern: ["X", "0"],
    theka: [
      {beat: 1, bol: "धा", laghu: 0}, {beat: 2, bol: "गे", laghu: 0},
      {beat: 3, bol: "ना", laghu: 0}, {beat: 4, bol: "ती", laghu: 0},
      {beat: 5, bol: "ना", laghu: 0}, {beat: 6, bol: "क", laghu: 0},
      {beat: 7, bol: "धी", laghu: 0}, {beat: 8, bol: "ना", laghu: 0}
    ]
  }
};

const bolsData = {
  daya: [
    {devanagari: "ता", romanized: "Ta", description: "Sharp rim stroke"},
    {devanagari: "ना", romanized: "Na", description: "Edge of syahi stroke"},
    {devanagari: "तिन", romanized: "Tin", description: "Resonant border stroke"},
    {devanagari: "तू", romanized: "Tu", description: "Center resonant stroke"},
    {devanagari: "ते", romanized: "Te", description: "Non-resonant center slap"},
    {devanagari: "तेटे", romanized: "Tete", description: "Two quick strokes"}
  ],
  baya: [
    {devanagari: "क", romanized: "Ka", description: "Flat palm stroke"},
    {devanagari: "के", romanized: "Ke", description: "Variation of Ka"},
    {devanagari: "कत", romanized: "Kat", description: "Louder Ka stroke"},
    {devanagari: "ग", romanized: "Ga", description: "Two finger resonant"},
    {devanagari: "गे", romanized: "Ge", description: "Variation of Ga"},
    {devanagari: "घे", romanized: "Ghe", description: "Open hand Ga"}
  ],
  compound: [
    {devanagari: "धा", romanized: "Dha", description: "Ta + Ga combination"},
    {devanagari: "धिन", romanized: "Dhin", description: "Tin + Ga combination"},
    {devanagari: "धागे", romanized: "Dhage", description: "Dha + Ge phrase"},
    {devanagari: "धिनागिना", romanized: "Dhina-gina", description: "Complex phrase"},
    {devanagari: "तिरकिट", romanized: "Tir-ki-ta", description: "Four stroke phrase"},
    {devanagari: "किटतक", romanized: "Kit-tak", description: "Quick alternating phrase"}
  ],
  special: [
    {devanagari: "-", romanized: "-", description: "Rest/silence"},
    {devanagari: "|", romanized: "|", description: "Vibhag separator"}
  ]
};

// Global state
let currentTala = null;
let selectedBol = null;
let composition = [];
let isPlaying = false;
let playbackInterval = null;
let currentBeat = 0;
let isLooping = false;

// DOM Elements
const talaSelect = document.getElementById('talaSelect');
const talaInfo = document.getElementById('talaInfo');
const talaName = document.getElementById('talaName');
const talaBeats = document.getElementById('talaBeats');
const talaPattern = document.getElementById('talaPattern');
const compositionGrid = document.getElementById('compositionGrid');
const thekaDisplay = document.getElementById('thekaDisplay');
const currentBolSpan = document.getElementById('currentBol');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    populateTalaDropdown();
    initializeKeyboard();
    setupEventListeners();
    loadSavedCompositions();
});

// Populate tala dropdown
function populateTalaDropdown() {
    // Clear existing options except the first one
    while (talaSelect.children.length > 1) {
        talaSelect.removeChild(talaSelect.lastChild);
    }
    
    // Add tala options
    Object.keys(talasData).forEach(talaKey => {
        const tala = talasData[talaKey];
        const option = document.createElement('option');
        option.value = talaKey;
        option.textContent = `${tala.name} / ${tala.devanagari}`;
        talaSelect.appendChild(option);
    });
}

// Initialize virtual keyboard
function initializeKeyboard() {
    const categories = ['daya', 'baya', 'compound', 'special'];
    
    categories.forEach(category => {
        const container = document.getElementById(category + 'Bols');
        bolsData[category].forEach(bol => {
            const button = document.createElement('button');
            button.className = 'bol-btn';
            button.textContent = bol.devanagari;
            button.title = `${bol.romanized} - ${bol.description}`;
            button.dataset.bol = bol.devanagari;
            button.dataset.romanized = bol.romanized;
            
            button.addEventListener('click', function() {
                selectBol(this);
            });
            
            container.appendChild(button);
        });
    });
}

// Setup event listeners
function setupEventListeners() {
    // Tala selection
    talaSelect.addEventListener('change', handleTalaChange);
    
    // Control buttons
    document.getElementById('playBtn').addEventListener('click', playComposition);
    document.getElementById('stopBtn').addEventListener('click', stopPlayback);
    document.getElementById('loopBtn').addEventListener('click', toggleLoop);
    document.getElementById('clearBtn').addEventListener('click', clearComposition);
    document.getElementById('saveBtn').addEventListener('click', saveComposition);
    document.getElementById('loadBtn').addEventListener('click', showLoadModal);
    document.getElementById('exportBtn').addEventListener('click', exportComposition);
    
    // Modal controls
    document.getElementById('closeModal').addEventListener('click', closeModal);
    document.getElementById('closeExportModal').addEventListener('click', closeExportModal);
    document.getElementById('copyDevanagari').addEventListener('click', () => copyToClipboard('devanagariExport'));
    document.getElementById('copyRomanized').addEventListener('click', () => copyToClipboard('romanizedExport'));
    
    // Close modal on outside click
    document.getElementById('compositionsModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
    document.getElementById('exportModal').addEventListener('click', function(e) {
        if (e.target === this) closeExportModal();
    });
}

// Handle tala selection change
function handleTalaChange() {
    const selectedValue = talaSelect.value;
    if (!selectedValue) {
        talaInfo.classList.add('hidden');
        compositionGrid.classList.add('hidden');
        thekaDisplay.classList.add('hidden');
        currentTala = null;
        return;
    }
    
    currentTala = talasData[selectedValue];
    displayTalaInfo();
    generateCompositionGrid();
    displayTheka();
    clearComposition();
}

// Display tala information
function displayTalaInfo() {
    if (!currentTala) return;
    
    talaName.textContent = `${currentTala.name} / ${currentTala.devanagari}`;
    talaBeats.textContent = `${currentTala.beats} beats / ${currentTala.beats} मात्रा`;
    talaPattern.textContent = `Pattern / ताली-खाली: ${currentTala.pattern.join(' - ')}`;
    
    talaInfo.classList.remove('hidden');
}

// Generate composition grid
function generateCompositionGrid() {
    if (!currentTala) return;
    
    compositionGrid.innerHTML = '';
    
    // Create header
    const header = document.createElement('div');
    header.className = 'grid-header';
    
    let currentVibhag = 0;
    let beatsInCurrentVibhag = 0;
    
    for (let beat = 1; beat <= currentTala.beats; beat++) {
        const beatHeader = document.createElement('div');
        beatHeader.className = 'beat-header';
        
        // Check if this is the start of a new vibhag
        if (beatsInCurrentVibhag === 0) {
            beatHeader.classList.add('vibhag-start');
        }
        
        beatHeader.innerHTML = `
            <div class="beat-number">${beat}</div>
            <div class="tali-khali">${currentTala.pattern[currentVibhag] || ''}</div>
        `;
        
        header.appendChild(beatHeader);
        
        beatsInCurrentVibhag++;
        if (beatsInCurrentVibhag >= currentTala.vibhags[currentVibhag]) {
            currentVibhag++;
            beatsInCurrentVibhag = 0;
        }
    }
    
    compositionGrid.appendChild(header);
    
    // Create body with laghu cells
    const body = document.createElement('div');
    body.className = 'grid-body';
    
    currentVibhag = 0;
    beatsInCurrentVibhag = 0;
    
    for (let beat = 1; beat <= currentTala.beats; beat++) {
        const beatColumn = document.createElement('div');
        beatColumn.className = 'beat-column';
        
        // Check if this is the start of a new vibhag
        if (beatsInCurrentVibhag === 0) {
            beatColumn.classList.add('vibhag-start');
        }
        
        // Create 8 laghu cells for each beat
        for (let laghu = 0; laghu < 8; laghu++) {
            const cell = document.createElement('div');
            cell.className = 'laghu-cell';
            cell.dataset.beat = beat;
            cell.dataset.laghu = laghu;
            cell.innerHTML = `<div class="laghu-number">${laghu + 1}</div>`;
            
            cell.addEventListener('click', function() {
                placeBol(beat, laghu);
            });
            
            beatColumn.appendChild(cell);
        }
        
        body.appendChild(beatColumn);
        
        beatsInCurrentVibhag++;
        if (beatsInCurrentVibhag >= currentTala.vibhags[currentVibhag]) {
            currentVibhag++;
            beatsInCurrentVibhag = 0;
        }
    }
    
    compositionGrid.appendChild(body);
    compositionGrid.classList.remove('hidden');
    
    // Initialize composition array
    composition = Array.from({length: currentTala.beats}, () => Array(8).fill(null));
}

// Display theka
function displayTheka() {
    if (!currentTala) return;
    
    thekaDisplay.innerHTML = '';
    
    currentTala.theka.forEach((thekaItem, index) => {
        const beatDiv = document.createElement('div');
        beatDiv.className = 'theka-beat';
        if (thekaItem.beat === 1) {
            beatDiv.classList.add('sam');
        }
        
        beatDiv.innerHTML = `
            <div class="theka-beat-number">${thekaItem.beat}</div>
            <div class="theka-bol">${thekaItem.bol}</div>
        `;
        
        thekaDisplay.appendChild(beatDiv);
    });
    
    thekaDisplay.classList.remove('hidden');
}

// Select bol from keyboard
function selectBol(button) {
    // Remove selection from all buttons
    document.querySelectorAll('.bol-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Select current button
    button.classList.add('selected');
    selectedBol = {
        devanagari: button.dataset.bol,
        romanized: button.dataset.romanized
    };
    
    currentBolSpan.textContent = `${selectedBol.devanagari} (${selectedBol.romanized})`;
}

// Place bol in grid
function placeBol(beat, laghu) {
    if (!selectedBol || !currentTala) return;
    
    const cell = document.querySelector(`[data-beat="${beat}"][data-laghu="${laghu}"]`);
    if (!cell) return;
    
    // Update composition data
    composition[beat - 1][laghu] = selectedBol;
    
    // Update cell display
    cell.classList.add('filled');
    cell.innerHTML = `<div class="laghu-number">${laghu + 1}</div>${selectedBol.devanagari}`;
}

// Playback functions
function playComposition() {
    if (!currentTala || isPlaying) return;
    
    isPlaying = true;
    currentBeat = 0;
    document.getElementById('playbackStatus').classList.remove('hidden');
    
    const tempo = document.getElementById('tempoSelect').value;
    const tempoSpeed = { slow: 1000, medium: 600, fast: 400 };
    const interval = tempoSpeed[tempo] / 8; // Divide by 8 for laghu timing
    
    let currentLaghu = 0;
    
    playbackInterval = setInterval(() => {
        // Clear previous highlighting
        document.querySelectorAll('.laghu-cell.current-beat').forEach(cell => {
            cell.classList.remove('current-beat');
        });
        
        // Highlight current cell
        const currentCell = document.querySelector(`[data-beat="${currentBeat + 1}"][data-laghu="${currentLaghu}"]`);
        if (currentCell) {
            currentCell.classList.add('current-beat');
        }
        
        // Simulate sound (could be replaced with actual audio)
        const bol = composition[currentBeat] && composition[currentBeat][currentLaghu];
        if (bol) {
            console.log(`Playing: ${bol.devanagari} (${bol.romanized})`);
        }
        
        currentLaghu++;
        if (currentLaghu >= 8) {
            currentLaghu = 0;
            currentBeat++;
            if (currentBeat >= currentTala.beats) {
                if (isLooping) {
                    currentBeat = 0;
                } else {
                    stopPlayback();
                    return;
                }
            }
        }
    }, interval);
}

function stopPlayback() {
    isPlaying = false;
    if (playbackInterval) {
        clearInterval(playbackInterval);
        playbackInterval = null;
    }
    
    // Clear highlighting
    document.querySelectorAll('.laghu-cell.current-beat').forEach(cell => {
        cell.classList.remove('current-beat');
    });
    
    document.getElementById('playbackStatus').classList.add('hidden');
}

function toggleLoop() {
    isLooping = !isLooping;
    const loopBtn = document.getElementById('loopBtn');
    if (isLooping) {
        loopBtn.classList.add('btn--primary');
        loopBtn.classList.remove('btn--outline');
    } else {
        loopBtn.classList.remove('btn--primary');
        loopBtn.classList.add('btn--outline');
    }
}

// Composition management
function clearComposition() {
    if (!currentTala) return;
    
    composition = Array.from({length: currentTala.beats}, () => Array(8).fill(null));
    
    document.querySelectorAll('.laghu-cell').forEach(cell => {
        cell.classList.remove('filled');
        const laghuNum = cell.dataset.laghu;
        cell.innerHTML = `<div class="laghu-number">${parseInt(laghuNum) + 1}</div>`;
    });
}

function saveComposition() {
    if (!currentTala || !composition.length) {
        alert('Please select a tala and create a composition first.');
        return;
    }
    
    const name = document.getElementById('compositionName').value || `${currentTala.name} Composition ${Date.now()}`;
    
    const compositionData = {
        name: name,
        tala: talaSelect.value,
        composition: composition,
        created: new Date().toISOString()
    };
    
    let savedCompositions = JSON.parse(localStorage.getItem('tablaCompositions') || '[]');
    savedCompositions.push(compositionData);
    localStorage.setItem('tablaCompositions', JSON.stringify(savedCompositions));
    
    alert('Composition saved successfully!');
    document.getElementById('compositionName').value = '';
}

function loadSavedCompositions() {
    const savedCompositions = JSON.parse(localStorage.getItem('tablaCompositions') || '[]');
    const list = document.getElementById('compositionsList');
    list.innerHTML = '';
    
    if (savedCompositions.length === 0) {
        list.innerHTML = '<p>No saved compositions found.</p>';
        return;
    }
    
    savedCompositions.forEach((comp, index) => {
        const item = document.createElement('div');
        item.className = 'composition-item';
        
        item.innerHTML = `
            <div class="composition-info">
                <h5>${comp.name}</h5>
                <div class="composition-meta">
                    Tala: ${talasData[comp.tala]?.name || comp.tala} | 
                    Created: ${new Date(comp.created).toLocaleDateString()}
                </div>
            </div>
            <div class="composition-actions">
                <button class="btn btn--primary btn--sm" onclick="loadComposition(${index})">Load</button>
                <button class="btn btn--outline btn--sm" onclick="deleteComposition(${index})">Delete</button>
            </div>
        `;
        
        list.appendChild(item);
    });
}

function loadComposition(index) {
    const savedCompositions = JSON.parse(localStorage.getItem('tablaCompositions') || '[]');
    const comp = savedCompositions[index];
    
    if (!comp) return;
    
    // Set tala
    talaSelect.value = comp.tala;
    handleTalaChange();
    
    // Load composition
    composition = comp.composition;
    
    // Update grid display
    composition.forEach((beat, beatIndex) => {
        beat.forEach((bol, laghuIndex) => {
            if (bol) {
                const cell = document.querySelector(`[data-beat="${beatIndex + 1}"][data-laghu="${laghuIndex}"]`);
                if (cell) {
                    cell.classList.add('filled');
                    cell.innerHTML = `<div class="laghu-number">${laghuIndex + 1}</div>${bol.devanagari}`;
                }
            }
        });
    });
    
    closeModal();
    alert('Composition loaded successfully!');
}

function deleteComposition(index) {
    if (!confirm('Are you sure you want to delete this composition?')) return;
    
    let savedCompositions = JSON.parse(localStorage.getItem('tablaCompositions') || '[]');
    savedCompositions.splice(index, 1);
    localStorage.setItem('tablaCompositions', JSON.stringify(savedCompositions));
    
    loadSavedCompositions();
}

function showLoadModal() {
    loadSavedCompositions();
    document.getElementById('compositionsModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('compositionsModal').classList.add('hidden');
}

function exportComposition() {
    if (!currentTala || !composition.length) {
        alert('Please select a tala and create a composition first.');
        return;
    }
    
    let devanagariText = `${currentTala.name} / ${currentTala.devanagari}\n\n`;
    let romanizedText = `${currentTala.name} / ${currentTala.devanagari}\n\n`;
    
    composition.forEach((beat, beatIndex) => {
        devanagariText += `Beat ${beatIndex + 1}: `;
        romanizedText += `Beat ${beatIndex + 1}: `;
        
        beat.forEach((bol, laghuIndex) => {
            if (bol) {
                devanagariText += bol.devanagari + ' ';
                romanizedText += bol.romanized + ' ';
            } else {
                devanagariText += '- ';
                romanizedText += '- ';
            }
        });
        
        devanagariText += '\n';
        romanizedText += '\n';
    });
    
    document.getElementById('devanagariExport').value = devanagariText;
    document.getElementById('romanizedExport').value = romanizedText;
    document.getElementById('exportModal').classList.remove('hidden');
}

function closeExportModal() {
    document.getElementById('exportModal').classList.add('hidden');
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    element.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
}

// Global functions for modal buttons
window.loadComposition = loadComposition;
window.deleteComposition = deleteComposition;