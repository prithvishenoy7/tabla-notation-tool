// Tabla Notation Tool JavaScript - Enhanced with Multi-cycle and Responsive Layout

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
    {devanagari: "ती", romanized: "Tin", description: "Resonant border stroke"},
    {devanagari: "तू", romanized: "Tu", description: "Center resonant stroke"},
    {devanagari: "ते", romanized: "Te", description: "Non-resonant center slap"},
    {devanagari: "र", romanized: "Ra", description: "Non-resonant center slap"},
    {devanagari: "ट", romanized: "Ta", description: "Non-resonant center slap"},
    {devanagari: "ति", romanized: "Ta", description: "Non-resonant center slap"}
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
let currentCycle = 0;
let currentBeat = 0;
let currentLaghu = 0;
let isLooping = false;
let laghusPerMatra = 8;
let numberOfCycles = 2;

// DOM Elements - Initialize after DOM loads
let talaSelect, laghusSelect, cyclesSelect, talaInfo, talaName, talaBeats, talaPattern;
let compositionGrid, thekaDisplay, currentBolSpan, currentConfigSpan;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing Enhanced Tabla Notation Tool');
    
    // Initialize DOM elements
    initializeDOMElements();
    
    // Initialize application components
    populateTalaDropdown();
    initializeKeyboard();
    setupEventListeners();
    loadSavedCompositions();
    updateConfigDisplay();
    updateCSSVariables();
    
    // Ensure playback status is hidden initially
    const playbackStatus = document.getElementById('playbackStatus');
    if (playbackStatus) {
        playbackStatus.classList.add('hidden');
    }
    
    console.log('Application initialized successfully');
});

// Initialize DOM elements
function initializeDOMElements() {
    talaSelect = document.getElementById('talaSelect');
    laghusSelect = document.getElementById('laghusSelect');
    cyclesSelect = document.getElementById('cyclesSelect');
    talaInfo = document.getElementById('talaInfo');
    talaName = document.getElementById('talaName');
    talaBeats = document.getElementById('talaBeats');
    talaPattern = document.getElementById('talaPattern');
    compositionGrid = document.getElementById('compositionGrid');
    thekaDisplay = document.getElementById('thekaDisplay');
    currentBolSpan = document.getElementById('currentBol');
    currentConfigSpan = document.getElementById('currentConfig');
    
    console.log('DOM elements initialized');
}

// Populate tala dropdown
function populateTalaDropdown() {
    if (!talaSelect) {
        console.error('Tala select element not found');
        return;
    }
    
    console.log('Populating tala dropdown');
    
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
    
    console.log('Tala dropdown populated with', Object.keys(talasData).length, 'options');
}

// Initialize virtual keyboard
function initializeKeyboard() {
    console.log('Initializing keyboard');
    const categories = ['daya', 'baya', 'compound', 'special'];
    
    categories.forEach(category => {
        const container = document.getElementById(category + 'Bols');
        if (!container) {
            console.error(`Container not found for category: ${category}`);
            return;
        }
        
        // Clear existing content
        container.innerHTML = '';
        
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
        
        console.log(`${category} bols initialized:`, bolsData[category].length, 'buttons');
    });
}

// Setup event listeners
function setupEventListeners() {
    console.log('Setting up event listeners');
    
    // Tala and configuration controls
    if (talaSelect) talaSelect.addEventListener('change', handleTalaChange);
    if (laghusSelect) laghusSelect.addEventListener('change', handleConfigChange);
    if (cyclesSelect) cyclesSelect.addEventListener('change', handleConfigChange);
    
    // Control buttons
    const playBtn = document.getElementById('playBtn');
    const stopBtn = document.getElementById('stopBtn');
    const loopBtn = document.getElementById('loopBtn');
    const clearBtn = document.getElementById('clearBtn');
    const saveBtn = document.getElementById('saveBtn');
    const loadBtn = document.getElementById('loadBtn');
    const exportBtn = document.getElementById('exportBtn');
    
    if (playBtn) playBtn.addEventListener('click', playComposition);
    if (stopBtn) stopBtn.addEventListener('click', stopPlayback);
    if (loopBtn) loopBtn.addEventListener('click', toggleLoop);
    if (clearBtn) clearBtn.addEventListener('click', clearComposition);
    if (saveBtn) saveBtn.addEventListener('click', saveComposition);
    if (loadBtn) loadBtn.addEventListener('click', showLoadModal);
    if (exportBtn) exportBtn.addEventListener('click', exportComposition);
    
    // Modal controls
    const closeModal = document.getElementById('closeModal');
    const closeExportModal = document.getElementById('closeExportModal');
    const copyDevanagari = document.getElementById('copyDevanagari');
    const copyRomanized = document.getElementById('copyRomanized');
    
    if (closeModal) closeModal.addEventListener('click', () => hideModal('compositionsModal'));
    if (closeExportModal) closeExportModal.addEventListener('click', () => hideModal('exportModal'));
    if (copyDevanagari) copyDevanagari.addEventListener('click', () => copyToClipboard('devanagariExport'));
    if (copyRomanized) copyRomanized.addEventListener('click', () => copyToClipboard('romanizedExport'));
    
    // Close modal on outside click
    const compositionsModal = document.getElementById('compositionsModal');
    const exportModal = document.getElementById('exportModal');
    
    if (compositionsModal) {
        compositionsModal.addEventListener('click', function(e) {
            if (e.target === this) hideModal('compositionsModal');
        });
    }
    
    if (exportModal) {
        exportModal.addEventListener('click', function(e) {
            if (e.target === this) hideModal('exportModal');
        });
    }
    
    // Window resize handler for responsive layout
    window.addEventListener('resize', debounce(updateResponsiveLayout, 250));
    
    console.log('Event listeners setup completed');
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle configuration changes
function handleConfigChange() {
    laghusPerMatra = parseInt(laghusSelect.value);
    numberOfCycles = parseInt(cyclesSelect.value);
    console.log('Configuration changed:', { laghusPerMatra, numberOfCycles });
    
    updateConfigDisplay();
    updateCSSVariables();
    
    if (currentTala) {
        generateCompositionGrid();
        clearComposition();
    }
}

// Update configuration display
function updateConfigDisplay() {
    if (currentConfigSpan) {
        currentConfigSpan.textContent = `Configuration: ${laghusPerMatra} laghus per matra, ${numberOfCycles} cycles`;
    }
}

// Update CSS variables for responsive layout
function updateCSSVariables() {
    const root = document.documentElement;
    if (root.classList) {
        root.className = root.className.replace(/laghus-\d+/g, '');
        root.classList.add(`laghus-${laghusPerMatra}`);
    }
    root.style.setProperty('--laghus-per-matra', laghusPerMatra);
}

// Handle tala selection change
function handleTalaChange() {
    const selectedValue = talaSelect.value;
    console.log('Tala changed to:', selectedValue);
    
    if (!selectedValue) {
        if (talaInfo) talaInfo.classList.add('hidden');
        if (compositionGrid) compositionGrid.classList.add('hidden');
        if (thekaDisplay) thekaDisplay.classList.add('hidden');
        currentTala = null;
        return;
    }
    
    currentTala = talasData[selectedValue];
    console.log('Current tala:', currentTala);
    
    displayTalaInfo();
    generateCompositionGrid();
    displayTheka();
    clearComposition();
}

// Display tala information
function displayTalaInfo() {
    if (!currentTala || !talaInfo) return;
    
    console.log('Displaying tala info');
    if (talaName) talaName.textContent = `${currentTala.name} / ${currentTala.devanagari}`;
    if (talaBeats) talaBeats.textContent = `${currentTala.beats} beats / ${currentTala.beats} मात्रा`;
    if (talaPattern) talaPattern.textContent = `Pattern / ताली-खाली: ${currentTala.pattern.join(' - ')}`;
    
    talaInfo.classList.remove('hidden');
}

// Calculate responsive layout parameters
function calculateResponsiveLayout() {
    const gridContainer = document.querySelector('.grid-container');
    if (!gridContainer) return { matrasPerLine: 4 };
    
    const containerWidth = gridContainer.offsetWidth - 32; // Account for padding
    const laghuWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--laghu-width')) || 40;
    const matraWidth = laghusPerMatra * laghuWidth + 20; // Add margin
    const matrasPerLine = Math.max(1, Math.floor(containerWidth / matraWidth));
    
    console.log('Responsive layout calc:', { containerWidth, laghuWidth, matraWidth, matrasPerLine });
    return { matrasPerLine };
}

// Generate composition grid with responsive wrapping and multiple cycles
function generateCompositionGrid() {
    if (!currentTala || !compositionGrid) {
        console.log('No current tala selected or grid element not found');
        return;
    }
    
    console.log('Generating composition grid for:', currentTala.name, 'with', numberOfCycles, 'cycles');
    
    // Clear existing content
    compositionGrid.innerHTML = '';
    
    // Update CSS variables
    updateCSSVariables();
    
    // Calculate layout parameters
    const { matrasPerLine } = calculateResponsiveLayout();
    
    // Generate each cycle
    for (let cycle = 0; cycle < numberOfCycles; cycle++) {
        const cycleContainer = document.createElement('div');
        cycleContainer.className = 'cycle-container';
        
        // Cycle header
        const cycleHeader = document.createElement('div');
        cycleHeader.className = 'cycle-header';
        cycleHeader.textContent = `Cycle ${cycle + 1} / चक्र ${cycle + 1}`;
        cycleContainer.appendChild(cycleHeader);
        
        // Cycle content with responsive wrapping
        const cycleContent = document.createElement('div');
        cycleContent.className = 'cycle-content';
        
        let currentVibhag = 0;
        let beatsInCurrentVibhag = 0;
        let matrasInCurrentLine = 0;
        
        for (let beat = 1; beat <= currentTala.beats; beat++) {
            // Add line break if we've reached the limit for this line
            if (matrasInCurrentLine >= matrasPerLine && matrasInCurrentLine > 0) {
                const lineBreak = document.createElement('div');
                lineBreak.className = 'line-break';
                cycleContent.appendChild(lineBreak);
                matrasInCurrentLine = 0;
            }
            
            const matraContainer = document.createElement('div');
            matraContainer.className = 'matra-container';
            
            // Check if this is the start of a new vibhag
            if (beatsInCurrentVibhag === 0) {
                matraContainer.classList.add('vibhag-start');
            }
            
            // Matra header with beat information
            const matraHeader = document.createElement('div');
            matraHeader.className = 'matra-header';
            if (beatsInCurrentVibhag === 0) {
                matraHeader.classList.add('vibhag-start');
            }
            
            const beatNumber = document.createElement('span');
            beatNumber.className = 'beat-number';
            beatNumber.textContent = beat;
            
            const taliKhali = document.createElement('span');
            taliKhali.className = 'tali-khali';
            taliKhali.textContent = currentTala.pattern[currentVibhag] || '';
            
            matraHeader.appendChild(beatNumber);
            matraHeader.appendChild(taliKhali);
            matraContainer.appendChild(matraHeader);
            
            // Create horizontal row of laghus for this matra
            const laghuRow = document.createElement('div');
            laghuRow.className = 'laghu-row';
            
            for (let laghu = 0; laghu < laghusPerMatra; laghu++) {
                const cell = document.createElement('div');
                cell.className = 'laghu-cell';
                cell.dataset.cycle = cycle;
                cell.dataset.beat = beat;
                cell.dataset.laghu = laghu;
                
                const laghuNumber = document.createElement('div');
                laghuNumber.className = 'laghu-number';
                laghuNumber.textContent = laghu + 1;
                
                const bolContent = document.createElement('div');
                bolContent.className = 'laghu-bol';
                
                cell.appendChild(laghuNumber);
                cell.appendChild(bolContent);
                
                cell.addEventListener('click', function() {
                    console.log(`Clicked cell cycle:${cycle}, beat:${beat}, laghu:${laghu}`);
                    placeBol(cycle, beat, laghu);
                });
                
                laghuRow.appendChild(cell);
            }
            
            matraContainer.appendChild(laghuRow);
            cycleContent.appendChild(matraContainer);
            
            beatsInCurrentVibhag++;
            matrasInCurrentLine++;
            
            if (beatsInCurrentVibhag >= currentTala.vibhags[currentVibhag]) {
                currentVibhag++;
                beatsInCurrentVibhag = 0;
            }
        }
        
        cycleContainer.appendChild(cycleContent);
        compositionGrid.appendChild(cycleContainer);
    }
    
    // Show the grid
    compositionGrid.classList.remove('hidden');
    console.log('Composition grid generated with', numberOfCycles, 'cycles');
    
    // Initialize composition array for multiple cycles
    composition = Array.from({length: numberOfCycles}, () => 
        Array.from({length: currentTala.beats}, () => Array(laghusPerMatra).fill(null))
    );
    console.log('Composition array initialized:', composition);
}

// Update responsive layout when window resizes
function updateResponsiveLayout() {
    if (currentTala && compositionGrid && !compositionGrid.classList.contains('hidden')) {
        setTimeout(() => {
            generateCompositionGrid();
            // Restore any existing composition data
            restoreCompositionDisplay();
        }, 100);
    }
}

// Restore composition display after layout update
function restoreCompositionDisplay() {
    if (!composition || !currentTala) return;
    
    composition.forEach((cycle, cycleIndex) => {
        cycle.forEach((beat, beatIndex) => {
            beat.forEach((bol, laghuIndex) => {
                if (bol) {
                    const cell = document.querySelector(`[data-cycle="${cycleIndex}"][data-beat="${beatIndex + 1}"][data-laghu="${laghuIndex}"]`);
                    if (cell) {
                        cell.classList.add('filled');
                        const bolContent = cell.querySelector('.laghu-bol');
                        if (bolContent) {
                            bolContent.textContent = bol.devanagari;
                        }
                    }
                }
            });
        });
    });
}

// Display theka
function displayTheka() {
    if (!currentTala || !thekaDisplay) return;
    
    console.log('Displaying theka');
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
    console.log('Theka displayed with', currentTala.theka.length, 'beats');
}

// Select bol from keyboard
function selectBol(button) {
    console.log('Selecting bol:', button.dataset.bol);
    
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
    
    if (currentBolSpan) {
        currentBolSpan.textContent = `${selectedBol.devanagari} (${selectedBol.romanized})`;
    }
    console.log('Selected bol:', selectedBol);
}

// Place bol in grid (updated for multiple cycles)
function placeBol(cycle, beat, laghu) {
    if (!selectedBol || !currentTala) {
        console.log('Cannot place bol - missing selected bol or current tala');
        return;
    }
    
    console.log(`Placing bol ${selectedBol.devanagari} at cycle:${cycle}, beat:${beat}, laghu:${laghu}`);
    
    const cell = document.querySelector(`[data-cycle="${cycle}"][data-beat="${beat}"][data-laghu="${laghu}"]`);
    if (!cell) {
        console.error(`Cell not found for cycle:${cycle}, beat:${beat}, laghu:${laghu}`);
        return;
    }
    
    // Update composition data
    if (!composition[cycle]) {
        console.error('Composition cycle not found:', cycle);
        return;
    }
    
    composition[cycle][beat - 1][laghu] = selectedBol;
    
    // Update cell display
    cell.classList.add('filled');
    const bolContent = cell.querySelector('.laghu-bol');
    if (bolContent) {
        bolContent.textContent = selectedBol.devanagari;
    }
    
    console.log('Bol placed successfully');
}

// Playback functions (updated for multiple cycles)
function playComposition() {
    if (!currentTala || isPlaying) return;
    
    console.log('Starting playback');
    isPlaying = true;
    currentCycle = 0;
    currentBeat = 0;
    currentLaghu = 0;
    
    const playbackStatus = document.getElementById('playbackStatus');
    if (playbackStatus) {
        playbackStatus.classList.remove('hidden');
    }
    
    const tempoSelect = document.getElementById('tempoSelect');
    const tempo = tempoSelect ? tempoSelect.value : 'medium';
    const tempoSpeed = { slow: 1000, medium: 600, fast: 400 };
    const interval = tempoSpeed[tempo] / laghusPerMatra;
    
    playbackInterval = setInterval(() => {
        // Clear previous highlighting
        document.querySelectorAll('.laghu-cell.current-beat').forEach(cell => {
            cell.classList.remove('current-beat');
        });
        
        // Highlight current cell
        const currentCell = document.querySelector(`[data-cycle="${currentCycle}"][data-beat="${currentBeat + 1}"][data-laghu="${currentLaghu}"]`);
        if (currentCell) {
            currentCell.classList.add('current-beat');
        }
        
        // Simulate sound
        const bol = composition[currentCycle] && composition[currentCycle][currentBeat] && composition[currentCycle][currentBeat][currentLaghu];
        if (bol) {
            console.log(`Playing: ${bol.devanagari} (${bol.romanized})`);
        }
        
        currentLaghu++;
        if (currentLaghu >= laghusPerMatra) {
            currentLaghu = 0;
            currentBeat++;
            if (currentBeat >= currentTala.beats) {
                currentBeat = 0;
                currentCycle++;
                if (currentCycle >= numberOfCycles) {
                    if (isLooping) {
                        currentCycle = 0;
                    } else {
                        stopPlayback();
                        return;
                    }
                }
            }
        }
    }, interval);
}

function stopPlayback() {
    console.log('Stopping playback');
    isPlaying = false;
    if (playbackInterval) {
        clearInterval(playbackInterval);
        playbackInterval = null;
    }
    
    // Clear highlighting
    document.querySelectorAll('.laghu-cell.current-beat').forEach(cell => {
        cell.classList.remove('current-beat');
    });
    
    const playbackStatus = document.getElementById('playbackStatus');
    if (playbackStatus) {
        playbackStatus.classList.add('hidden');
    }
}

function toggleLoop() {
    isLooping = !isLooping;
    const loopBtn = document.getElementById('loopBtn');
    if (loopBtn) {
        if (isLooping) {
            loopBtn.classList.add('btn--primary');
            loopBtn.classList.remove('btn--outline');
        } else {
            loopBtn.classList.remove('btn--primary');
            loopBtn.classList.add('btn--outline');
        }
    }
    console.log('Loop toggled:', isLooping);
}

// Composition management (updated for multiple cycles)
function clearComposition() {
    if (!currentTala) return;
    
    console.log('Clearing composition');
    composition = Array.from({length: numberOfCycles}, () => 
        Array.from({length: currentTala.beats}, () => Array(laghusPerMatra).fill(null))
    );
    
    document.querySelectorAll('.laghu-cell').forEach(cell => {
        cell.classList.remove('filled');
        const bolContent = cell.querySelector('.laghu-bol');
        if (bolContent) {
            bolContent.textContent = '';
        }
    });
}

function saveComposition() {
    if (!currentTala || !composition.length) {
        alert('Please select a tala and create a composition first.');
        return;
    }
    
    const compositionNameInput = document.getElementById('compositionName');
    const name = compositionNameInput ? compositionNameInput.value || `${currentTala.name} Composition ${Date.now()}` : `${currentTala.name} Composition ${Date.now()}`;
    
    const compositionData = {
        name: name,
        tala: talaSelect.value,
        composition: composition,
        laghusPerMatra: laghusPerMatra,
        numberOfCycles: numberOfCycles,
        created: new Date().toISOString(),
        version: '2.0' // Mark as enhanced version
    };
    
    let savedCompositions = JSON.parse(localStorage.getItem('tablaCompositions') || '[]');
    savedCompositions.push(compositionData);
    localStorage.setItem('tablaCompositions', JSON.stringify(savedCompositions));
    
    alert('Composition saved successfully!');
    if (compositionNameInput) {
        compositionNameInput.value = '';
    }
}

function loadSavedCompositions() {
    const savedCompositions = JSON.parse(localStorage.getItem('tablaCompositions') || '[]');
    const list = document.getElementById('compositionsList');
    if (!list) return;
    
    list.innerHTML = '';
    
    if (savedCompositions.length === 0) {
        list.innerHTML = '<p>No saved compositions found.</p>';
        return;
    }
    
    savedCompositions.forEach((comp, index) => {
        const item = document.createElement('div');
        item.className = 'composition-item';
        
        const versionInfo = comp.version ? `v${comp.version}` : 'v1.0';
        const configInfo = comp.laghusPerMatra ? `${comp.laghusPerMatra}L×${comp.numberOfCycles}C` : '8L×1C';
        
        item.innerHTML = `
            <div class="composition-info">
                <h5>${comp.name}</h5>
                <div class="composition-meta">
                    Tala: ${talasData[comp.tala]?.name || comp.tala} | 
                    Config: ${configInfo} | ${versionInfo} |
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
    
    // Set configuration
    laghusPerMatra = comp.laghusPerMatra || 8;
    numberOfCycles = comp.numberOfCycles || 1;
    
    if (laghusSelect) laghusSelect.value = laghusPerMatra;
    if (cyclesSelect) cyclesSelect.value = numberOfCycles;
    
    updateConfigDisplay();
    updateCSSVariables();
    
    // Set tala
    if (talaSelect) talaSelect.value = comp.tala;
    handleTalaChange();
    
    // Load composition
    composition = comp.composition;
    
    // Ensure composition array has correct dimensions
    if (!Array.isArray(composition[0][0])) {
        // Convert old format to new format
        composition = [composition.map(beat => 
            beat.concat(Array(Math.max(0, laghusPerMatra - beat.length)).fill(null))
        )];
    }
    
    // Restore display
    setTimeout(() => {
        restoreCompositionDisplay();
    }, 100);
    
    hideModal('compositionsModal');
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
    const modal = document.getElementById('compositionsModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function hideModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
}

function exportComposition() {
    if (!currentTala || !composition.length) {
        alert('Please select a tala and create a composition first.');
        return;
    }
    
    let devanagariText = `${currentTala.name} / ${currentTala.devanagari}\n`;
    devanagariText += `Configuration: ${laghusPerMatra} laghus per matra, ${numberOfCycles} cycles\n\n`;
    
    let romanizedText = `${currentTala.name} / ${currentTala.devanagari}\n`;
    romanizedText += `Configuration: ${laghusPerMatra} laghus per matra, ${numberOfCycles} cycles\n\n`;
    
    composition.forEach((cycle, cycleIndex) => {
        devanagariText += `=== Cycle ${cycleIndex + 1} ===\n`;
        romanizedText += `=== Cycle ${cycleIndex + 1} ===\n`;
        
        cycle.forEach((beat, beatIndex) => {
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
        devanagariText += '\n';
        romanizedText += '\n';
    });
    
    const devanagariExport = document.getElementById('devanagariExport');
    const romanizedExport = document.getElementById('romanizedExport');
    const exportModal = document.getElementById('exportModal');
    
    if (devanagariExport) devanagariExport.value = devanagariText;
    if (romanizedExport) romanizedExport.value = romanizedText;
    if (exportModal) exportModal.classList.remove('hidden');
}

function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.select();
        document.execCommand('copy');
        alert('Copied to clipboard!');
    }
}

// Global functions for modal buttons
window.loadComposition = loadComposition;
window.deleteComposition = deleteComposition;