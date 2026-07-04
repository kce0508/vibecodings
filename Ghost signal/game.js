const CONFIG = {
  width: 19,
  height: 15,
  tile: 32,
  timeLimit: 90,
  visionRadius: 4,
  ghostStepMs: 1180,
  dangerRadius: 5,
  warningRadius: 8
};

const TILE = {
  GRASS: 'grass',
  PATH: 'path',
  TREE: 'tree',
  ROCK: 'rock',
  BUSH: 'bush',
  STUMP: 'stump',
  FENCE: 'fence',
  DOOR: 'door',
  KEY: 'key'
};

const ICONS = {
  start: '🌲',
  info: '!',
  key: '🗝',
  door: '🚪',
  ghost: '☠',
  clear: '✓',
  over: '☠'
};

const STAGE_CONFIGS = [
  {
    label: '1 / 3',
    name: 'Forest Entry',
    timeLimit: 90,
    visionRadius: 4,
    ghostStepMs: 1320,
    dangerRadius: 5,
    warningRadius: 8,
    pathRadius: 1,
    obstacleChance: 0.18,
    loopChance: 0.08,
    palette: {
      grassA: '#35522c',
      grassB: '#263f22',
      pathA: '#6a5733',
      pathB: '#8b7241',
      fogCenter: 'rgba(173, 255, 154, 0.34)',
      fogMid: 'rgba(105, 155, 72, 0.16)',
      fogOuter: 'rgba(12, 24, 18, 0.08)',
      backdrop: '#031017'
    },
    start: { x: 2, y: 12 },
    route: [
      { x: 2, y: 12 },
      { x: 4, y: 11 },
      { x: 6, y: 10 },
      { x: 8, y: 9 },
      { x: 9, y: 7 },
      { x: 9, y: 5 },
      { x: 11, y: 5 },
      { x: 13, y: 4 },
      { x: 15, y: 3 },
      { x: 16, y: 2 }
    ],
    keyRange: [3, 6],
    doorRange: [8, 9]
  },
  {
    label: '2 / 3',
    name: 'Twisted Hollow',
    timeLimit: 75,
    visionRadius: 4,
    ghostStepMs: 1080,
    dangerRadius: 4,
    warningRadius: 7,
    pathRadius: 1,
    obstacleChance: 0.28,
    branchRadius: 1,
    branchChance: 0.75,
    loopChance: 0.14,
    start: { x: 2, y: 12 },
    route: [
      { x: 2, y: 12 },
      { x: 3, y: 10 },
      { x: 4, y: 8 },
      { x: 6, y: 8 },
      { x: 6, y: 6 },
      { x: 8, y: 6 },
      { x: 9, y: 7 },
      { x: 10, y: 6 },
      { x: 10, y: 4 },
      { x: 12, y: 4 },
      { x: 13, y: 6 },
      { x: 14, y: 5 },
      { x: 15, y: 4 },
      { x: 16, y: 2 }
    ],
    keyRange: [4, 9],
    doorRange: [11, 13],
    mazeSpurs: 4,
    palette: {
      grassA: '#3a4f31',
      grassB: '#21351d',
      pathA: '#725b38',
      pathB: '#94754a',
      fogCenter: 'rgba(179, 236, 136, 0.24)',
      fogMid: 'rgba(120, 165, 78, 0.14)',
      fogOuter: 'rgba(9, 18, 14, 0.12)',
      backdrop: '#021016'
    },
    branches: [
      [
        { x: 4, y: 8 },
        { x: 4, y: 6 },
        { x: 3, y: 5 }
      ],
      [
        { x: 6, y: 6 },
        { x: 8, y: 6 },
        { x: 8, y: 4 },
        { x: 7, y: 3 }
      ],
      [
        { x: 10, y: 4 },
        { x: 11, y: 4 },
        { x: 11, y: 6 },
        { x: 12, y: 7 }
      ]
    ]
  },
  {
    label: '3 / 3',
    name: 'Black Maze',
    timeLimit: 60,
    visionRadius: 3,
    ghostStepMs: 900,
    dangerRadius: 4,
    warningRadius: 6,
    pathRadius: 0,
    obstacleChance: 0.48,
    branchRadius: 0,
    branchChance: 1,
    ghostAggression: 2,
    loopChance: 0.22,
    palette: {
      grassA: '#243928',
      grassB: '#132118',
      pathA: '#57452b',
      pathB: '#76623e',
      fogCenter: 'rgba(172, 198, 255, 0.16)',
      fogMid: 'rgba(64, 86, 125, 0.12)',
      fogOuter: 'rgba(2, 6, 10, 0.22)',
      backdrop: '#01060a'
    },
    start: { x: 2, y: 12 },
    route: [
      { x: 2, y: 12 },
      { x: 2, y: 10 },
      { x: 4, y: 10 },
      { x: 4, y: 8 },
      { x: 5, y: 8 },
      { x: 5, y: 6 },
      { x: 7, y: 6 },
      { x: 7, y: 4 },
      { x: 9, y: 4 },
      { x: 10, y: 5 },
      { x: 11, y: 3 },
      { x: 11, y: 6 },
      { x: 12, y: 6 },
      { x: 13, y: 4 },
      { x: 14, y: 4 },
      { x: 15, y: 3 },
      { x: 16, y: 2 }
    ],
    keyRange: [5, 12],
    doorRange: [14, 16],
    mazeSpurs: 8,
    branches: [
      [
        { x: 2, y: 10 },
        { x: 1, y: 9 },
        { x: 1, y: 7 }
      ],
      [
        { x: 4, y: 8 },
        { x: 6, y: 8 },
        { x: 6, y: 9 },
        { x: 7, y: 10 }
      ],
      [
        { x: 7, y: 4 },
        { x: 8, y: 3 },
        { x: 9, y: 2 },
        { x: 10, y: 2 }
      ],
      [
        { x: 11, y: 6 },
        { x: 12, y: 7 },
        { x: 13, y: 7 },
        { x: 14, y: 6 }
      ]
    ]
  }
];

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlayTitle');
const overlayText = document.getElementById('overlayText');
const overlayEmoji = document.getElementById('overlayEmoji');
const overlayButton = document.getElementById('overlayButton');
const timeValue = document.getElementById('timeValue');
const lifeValue = document.getElementById('lifeValue');
const keyValue = document.getElementById('keyValue');
const dangerValue = document.getElementById('dangerValue');
const doorValue = document.getElementById('doorValue');
const signalArrows = document.getElementById('signalArrows');
const signalBars = document.getElementById('signalBars');
const stageValue = document.getElementById('stageValue');
const stateValue = document.getElementById('stateValue');
const hintValue = document.getElementById('hintValue');
const messageList = document.getElementById('messageList');
const mobileButtons = document.querySelectorAll('.mobile-controls button');

const audio = {
  context: null,
  enabled: false
};

let overlayButtonHandler = null;

const game = {
  state: 'idle',
  timeLeft: CONFIG.timeLimit,
  stageIndex: 0,
  stageConfig: STAGE_CONFIGS[0],
  livesLeft: 2,
  keyFound: false,
  doorUnlocked: false,
  ended: false,
  player: { x: 2, y: CONFIG.height - 3 },
  key: { x: 12, y: 4, taken: false },
  door: { x: CONFIG.width - 3, y: 2 },
  ghost: { x: 15, y: 11, visible: false, pulse: 0 },
  explored: new Set(),
  messages: [],
  map: [],
  lastGhostStep: 0,
  lastFrame: 0,
  heartbeat: 0,
  titleMode: true,
  catchGraceUntil: 0
};

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function rand(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

function keyFor(x, y) {
  return `${x},${y}`;
}

function inBounds(x, y) {
  return x >= 0 && y >= 0 && x < CONFIG.width && y < CONFIG.height;
}

function getCurrentStageConfig() {
  return game.stageConfig || STAGE_CONFIGS[0];
}

function isWalkable(tile) {
  return tile === TILE.GRASS || tile === TILE.PATH || tile === TILE.KEY || tile === TILE.DOOR;
}

function ensureAudio() {
  if (audio.enabled) return;
  audio.context = new (window.AudioContext || window.webkitAudioContext)();
  audio.enabled = true;
}

function playTone(frequency, duration, type = 'sine', gainValue = 0.03) {
  if (!audio.enabled) return;
  const ctxAudio = audio.context;
  const osc = ctxAudio.createOscillator();
  const gain = ctxAudio.createGain();
  osc.type = type;
  osc.frequency.value = frequency;
  gain.gain.value = gainValue;
  osc.connect(gain);
  gain.connect(ctxAudio.destination);
  osc.start();
  osc.stop(ctxAudio.currentTime + duration);
}

function playSound(kind) {
  if (!audio.enabled) return;
  if (kind === 'key') {
    playTone(960, 0.08, 'square', 0.035);
    setTimeout(() => playTone(1320, 0.09, 'square', 0.03), 90);
  } else if (kind === 'door') {
    playTone(520, 0.12, 'triangle', 0.05);
    setTimeout(() => playTone(740, 0.14, 'triangle', 0.04), 100);
  } else if (kind === 'caught') {
    playTone(170, 0.22, 'sawtooth', 0.04);
  } else if (kind === 'clear') {
    playTone(660, 0.12, 'triangle', 0.04);
    setTimeout(() => playTone(880, 0.16, 'triangle', 0.03), 120);
    setTimeout(() => playTone(990, 0.18, 'triangle', 0.02), 240);
  }
}

function createEmptyMap() {
  const map = [];
  for (let y = 0; y < CONFIG.height; y += 1) {
    const row = [];
    for (let x = 0; x < CONFIG.width; x += 1) {
      row.push(TILE.GRASS);
    }
    map.push(row);
  }
  return map;
}

function carvePath(points) {
  for (let i = 0; i < points.length - 1; i += 1) {
    const a = points[i];
    const b = points[i + 1];
    const dx = Math.sign(b.x - a.x);
    const dy = Math.sign(b.y - a.y);
    let x = a.x;
    let y = a.y;
    while (x !== b.x || y !== b.y) {
      game.map[y][x] = TILE.PATH;
      if (x !== b.x) x += dx;
      if (y !== b.y) y += dy;
    }
    game.map[b.y][b.x] = TILE.PATH;
  }
}

function carveBranch(points) {
  carvePath(points);
  points.forEach((point) => paintClearArea(point, 0));
}

function pickRouteIndex(route, range, fallbackIndex = 0) {
  const [minIndex, maxIndex] = range;
  const startIndex = clamp(minIndex, 0, route.length - 1);
  const endIndex = clamp(maxIndex, 0, route.length - 1);
  const low = Math.min(startIndex, endIndex);
  const high = Math.max(startIndex, endIndex);
  if (high < low) return clamp(fallbackIndex, 0, route.length - 1);
  return rand(low, high);
}

function carveRandomSpurs(stage) {
  const spurCount = stage.mazeSpurs || 0;
  if (!spurCount) return;

  const directions = [
    { x: 0, y: -1 },
    { x: 0, y: 1 },
    { x: -1, y: 0 },
    { x: 1, y: 0 }
  ];

  for (let i = 0; i < spurCount; i += 1) {
    const anchor = stage.route[rand(1, Math.max(1, stage.route.length - 2))];
    if (!anchor) continue;
    let current = { x: anchor.x, y: anchor.y };
    const path = [current];
    let lastDirection = directions[rand(0, directions.length - 1)];
    const length = rand(3, game.stageIndex === 2 ? 7 : 5);

    for (let step = 0; step < length; step += 1) {
      const candidates = directions.filter((direction) => {
        const nextX = current.x + direction.x;
        const nextY = current.y + direction.y;
        return inBounds(nextX, nextY) && !(Math.abs(nextX - game.player.x) < 2 && Math.abs(nextY - game.player.y) < 2);
      });
      if (!candidates.length) break;

      let direction = candidates[rand(0, candidates.length - 1)];
      if (Math.random() < 0.6) {
        direction = candidates.find((candidate) => candidate.x === lastDirection.x && candidate.y === lastDirection.y) || direction;
      }

      const next = { x: current.x + direction.x, y: current.y + direction.y };
      if (!inBounds(next.x, next.y)) break;
      path.push(next);
      current = next;
      lastDirection = direction;
    }

    if (path.length > 1) {
      carveBranch(path);
      if (stage.pathRadius > 0) {
        path.forEach((point) => paintClearArea(point, stage.pathRadius - 1));
      }
    }
  }
}

function getMazeDimensions() {
  return {
    cols: Math.floor((CONFIG.width - 1) / 2),
    rows: Math.floor((CONFIG.height - 1) / 2)
  };
}

function clampMazeCell(cell) {
  const { cols, rows } = getMazeDimensions();
  return {
    col: clamp(cell.col, 0, cols - 1),
    row: clamp(cell.row, 0, rows - 1)
  };
}

function tileToMazeCell(point) {
  return clampMazeCell({
    col: Math.floor((point.x - 1) / 2),
    row: Math.floor((point.y - 1) / 2)
  });
}

function mazeCellToTile(cell) {
  return {
    x: cell.col * 2 + 1,
    y: cell.row * 2 + 1
  };
}

function shuffle_in_place(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    const swapIndex = rand(0, index);
    [array[index], array[swapIndex]] = [array[swapIndex], array[index]];
  }
  return array;
}

function createMazeMap() {
  const map = [];
  for (let y = 0; y < CONFIG.height; y += 1) {
    const row = [];
    for (let x = 0; x < CONFIG.width; x += 1) {
      row.push(TILE.TREE);
    }
    map.push(row);
  }
  return map;
}

function carveMazeStage(stage) {
  const { cols, rows } = getMazeDimensions();
  const startCell = tileToMazeCell(stage.start);
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
  const stack = [startCell];
  const carveCell = (cell) => {
    const tile = mazeCellToTile(cell);
    game.map[tile.y][tile.x] = TILE.PATH;
  };

  carveCell(startCell);
  visited[startCell.row][startCell.col] = true;

  const directions = [
    { col: 0, row: -1 },
    { col: 1, row: 0 },
    { col: 0, row: 1 },
    { col: -1, row: 0 }
  ];

  while (stack.length) {
    const current = stack[stack.length - 1];
    const neighbors = directions
      .map((direction) => ({
        col: current.col + direction.col,
        row: current.row + direction.row,
        direction
      }))
      .filter((candidate) => (
        candidate.col >= 0 &&
        candidate.row >= 0 &&
        candidate.col < cols &&
        candidate.row < rows &&
        !visited[candidate.row][candidate.col]
      ));

    if (!neighbors.length) {
      stack.pop();
      continue;
    }

    const next = shuffle_in_place(neighbors)[0];
    const currentTile = mazeCellToTile(current);
    const nextTile = mazeCellToTile(next);
    const wallTile = {
      x: currentTile.x + next.direction.col,
      y: currentTile.y + next.direction.row
    };

    game.map[wallTile.y][wallTile.x] = TILE.PATH;
    game.map[nextTile.y][nextTile.x] = TILE.PATH;
    visited[next.row][next.col] = true;
    stack.push({ col: next.col, row: next.row });
  }

  const loopChance = stage.loopChance || 0;
  if (loopChance > 0) {
    for (let row = 0; row < rows; row += 1) {
      for (let col = 0; col < cols; col += 1) {
        const cell = { col, row };
        const tile = mazeCellToTile(cell);
        const candidates = [
          { dx: 2, dy: 0 },
          { dx: 0, dy: 2 }
        ];
        candidates.forEach((vector) => {
          const neighborX = tile.x + vector.dx;
          const neighborY = tile.y + vector.dy;
          const wallX = tile.x + vector.dx / 2;
          const wallY = tile.y + vector.dy / 2;
          if (!inBounds(neighborX, neighborY) || !inBounds(wallX, wallY)) return;
          if (game.map[tile.y][tile.x] !== TILE.PATH || game.map[neighborY][neighborX] !== TILE.PATH) return;
          if (game.map[wallY][wallX] === TILE.PATH) return;
          if (Math.random() < loopChance) {
            game.map[wallY][wallX] = TILE.PATH;
          }
        });
      }
    }
  }

  return startCell;
}

function collectWalkableTiles() {
  const tiles = [];
  for (let y = 0; y < CONFIG.height; y += 1) {
    for (let x = 0; x < CONFIG.width; x += 1) {
      if (isWalkable(game.map[y][x])) {
        tiles.push({ x, y });
      }
    }
  }
  return tiles;
}

function buildDistanceMap(start) {
  const queue = [start];
  const distances = new Map([[keyFor(start.x, start.y), 0]]);
  const directions = [
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 }
  ];

  while (queue.length) {
    const current = queue.shift();
    const currentDistance = distances.get(keyFor(current.x, current.y)) || 0;

    directions.forEach((direction) => {
      const nextX = current.x + direction.x;
      const nextY = current.y + direction.y;
      if (!inBounds(nextX, nextY)) return;
      if (!isWalkable(game.map[nextY][nextX])) return;
      const nextKey = keyFor(nextX, nextY);
      if (distances.has(nextKey)) return;
      distances.set(nextKey, currentDistance + 1);
      queue.push({ x: nextX, y: nextY });
    });
  }

  return distances;
}

function pickTileByDistance(distances, predicate, fallback = null) {
  const candidates = [];
  for (const [tileKey, distance] of distances.entries()) {
    if (!predicate(distance)) continue;
    const [x, y] = tileKey.split(',').map(Number);
    candidates.push({ x, y, distance });
  }
  if (!candidates.length) {
    return fallback;
  }
  candidates.sort((a, b) => a.distance - b.distance);
  return candidates[rand(0, candidates.length - 1)];
}

function pickTileFromDistanceRange(distances, minRatio, maxRatio, fallback = null, excludedKeys = new Set(), predicate = null) {
  const candidates = [];
  for (const [tileKey, distance] of distances.entries()) {
    if (excludedKeys.has(tileKey)) continue;
    const [x, y] = tileKey.split(',').map(Number);
    if (predicate && !predicate({ x, y, distance })) continue;
    candidates.push({ x, y, distance });
  }
  if (!candidates.length) return fallback;
  candidates.sort((a, b) => a.distance - b.distance);
  const start = clamp(Math.floor(candidates.length * minRatio), 0, candidates.length - 1);
  const end = clamp(Math.floor(candidates.length * maxRatio), start, candidates.length - 1);
  return candidates[rand(start, end)] || fallback;
}

function decorateDoorframe(door) {
  const offsets = [
    { x: -1, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: -1 },
    { x: 0, y: 1 }
  ];

  offsets.forEach((offset, index) => {
    const x = door.x + offset.x;
    const y = door.y + offset.y;
    if (!inBounds(x, y)) return;
    if (index === 0) return;
    if (game.map[y][x] === TILE.PATH && hasOpenApproach(door, x, y)) {
      game.map[y][x] = TILE.FENCE;
    }
  });
}

function isInteriorTile(tile) {
  return tile.x > 1 && tile.y > 1 && tile.x < CONFIG.width - 2 && tile.y < CONFIG.height - 2;
}

function hasOpenApproach(door, x, y) {
  return Math.abs(door.x - x) + Math.abs(door.y - y) === 1;
}

function countWalkableNeighbors(x, y) {
  const directions = [
    { x: 0, y: -1 },
    { x: 1, y: 0 },
    { x: 0, y: 1 },
    { x: -1, y: 0 }
  ];
  let count = 0;
  directions.forEach((direction) => {
    const nextX = x + direction.x;
    const nextY = y + direction.y;
    if (inBounds(nextX, nextY) && isWalkable(game.map[nextY][nextX])) {
      count += 1;
    }
  });
  return count;
}

function paintClearArea(center, radius, tile = TILE.PATH) {
  for (let y = center.y - radius; y <= center.y + radius; y += 1) {
    for (let x = center.x - radius; x <= center.x + radius; x += 1) {
      if (!inBounds(x, y)) continue;
      game.map[y][x] = tile;
    }
  }
}

function carveStageRoute() {
  const stage = getCurrentStageConfig();
  const route = stage.route;
  carvePath(route);
  route.forEach((point) => paintClearArea(point, stage.pathRadius));
  if (stage.branches && stage.branches.length) {
    stage.branches.forEach((branch) => {
      if (Math.random() <= (stage.branchChance ?? 1)) {
        carveBranch(branch);
      }
    });
  }
  carveRandomSpurs(stage);
  game.player = { x: stage.start.x, y: stage.start.y };
}

function fillForestDetails() {
  const stage = getCurrentStageConfig();
  for (let y = 0; y < CONFIG.height; y += 1) {
    for (let x = 0; x < CONFIG.width; x += 1) {
      if (game.map[y][x] === TILE.PATH || game.map[y][x] === TILE.KEY || game.map[y][x] === TILE.DOOR) continue;
      const roll = Math.random();
      if (roll < stage.obstacleChance * 0.5) game.map[y][x] = TILE.TREE;
      else if (roll < stage.obstacleChance * 0.72) game.map[y][x] = TILE.BUSH;
      else if (roll < stage.obstacleChance * 0.9) game.map[y][x] = TILE.ROCK;
      else if (roll < stage.obstacleChance) game.map[y][x] = TILE.STUMP;
    }
  }
}

function chooseGhostSpawn() {
  const options = [];
  for (let y = 1; y < CONFIG.height - 1; y += 1) {
    for (let x = 1; x < CONFIG.width - 1; x += 1) {
      if (!inBounds(x, y)) continue;
      if (!isWalkable(game.map[y][x])) continue;
      const distanceToPlayer = Math.abs(x - game.player.x) + Math.abs(y - game.player.y);
      const distanceToDoor = Math.abs(x - game.door.x) + Math.abs(y - game.door.y);
      const distanceToKey = Math.abs(x - game.key.x) + Math.abs(y - game.key.y);
      if (distanceToPlayer < 8 + Math.max(0, 3 - game.stageIndex) || distanceToDoor < 7 || distanceToKey < 5) continue;
      options.push({ x, y });
    }
  }
  return options.length ? options[rand(0, options.length - 1)] : { x: CONFIG.width - 5, y: CONFIG.height - 4 };
}

function generateMap() {
  game.stageConfig = STAGE_CONFIGS[game.stageIndex] || STAGE_CONFIGS[0];
  game.map = createMazeMap();
  const startCell = carveMazeStage(game.stageConfig);
  const startTile = mazeCellToTile(startCell);
  game.player = { ...startTile };

  const distances = buildDistanceMap(game.player);
  const excluded = new Set([keyFor(game.player.x, game.player.y)]);
  const keyTile = pickTileFromDistanceRange(
    distances,
    0.35,
    0.58,
    { x: game.player.x, y: game.player.y, distance: 0 },
    excluded
    ,
    (candidate) => isInteriorTile(candidate) && countWalkableNeighbors(candidate.x, candidate.y) >= 1
  );
  if (keyTile) {
    excluded.add(keyFor(keyTile.x, keyTile.y));
  }
  const doorTile = pickTileFromDistanceRange(
    distances,
    0.78,
    0.96,
    { x: startTile.x, y: startTile.y, distance: 0 },
    excluded,
    (candidate) => isInteriorTile(candidate) && countWalkableNeighbors(candidate.x, candidate.y) >= 2
  ) || keyTile;
  const safeDoorTile = doorTile && countWalkableNeighbors(doorTile.x, doorTile.y) >= 2
    ? doorTile
    : pickTileFromDistanceRange(
        distances,
        0.78,
        0.96,
        { x: startTile.x, y: startTile.y, distance: 0 },
        excluded,
        (candidate) => isInteriorTile(candidate) && countWalkableNeighbors(candidate.x, candidate.y) >= 1
      ) || keyTile;

  game.key = { x: keyTile.x, y: keyTile.y, taken: false };
  game.door = { x: safeDoorTile.x, y: safeDoorTile.y };
  game.map[game.key.y][game.key.x] = TILE.KEY;
  game.map[game.door.y][game.door.x] = TILE.DOOR;
  fillForestDetails();
  game.ghost = chooseGhostSpawn();
  game.key.taken = false;
}

function resetGame(stageIndex = 0) {
  game.stageIndex = stageIndex;
  game.stageConfig = STAGE_CONFIGS[stageIndex] || STAGE_CONFIGS[0];
  game.timeLeft = game.stageConfig.timeLimit;
  game.livesLeft = game.stageConfig.lives || 2;
  game.keyFound = false;
  game.doorUnlocked = false;
  game.ended = false;
  game.state = 'running';
  game.titleMode = false;
  game.explored = new Set();
  game.messages = [];
  game.lastGhostStep = performance.now();
  game.heartbeat = 0;
  game.catchGraceUntil = performance.now() + 650;
  generateMap();
  addMessage('info', `${game.stageConfig.label} ${game.stageConfig.name} - 게임이 시작되었다.`);
  addMessage('info', '열쇠를 찾아 출구로 탈출하라.');
  updateUI();
  hideOverlay();
}

function startGame() {
  ensureAudio();
  if (audio.context && audio.context.state === 'suspended') {
    audio.context.resume().catch(() => {});
  }
  resetGame(0);
}

function endGame(type) {
  if (game.ended) return;
  game.ended = true;
  game.state = type;
  if (type === 'over') {
    addMessage('ghost', '유령에게 잡혔다... GAME OVER');
    showOverlay(
      'GAME OVER',
      '유령의 기운이 너무 강했다. 같은 단계부터 다시 도전해보자.',
      ICONS.over,
      '다시 시작',
      'restart',
      () => resetGame(game.stageIndex)
    );
    playSound('caught');
  } else {
    addMessage('clear', '탈출에 성공했다! GOOD ENDING');
    showOverlay('GOOD ENDING', '어둠 속에서 빠져나왔다. 신호는 끊겼다.', ICONS.clear, '처음으로', 'restart', startGame);
    playSound('clear');
  }
  updateUI();
}

function handleGhostCatch() {
  if (game.ended || game.state !== 'running') return;

  game.livesLeft -= 1;
  game.lastGhostStep = performance.now();

  if (game.livesLeft <= 0) {
    endGame('over');
    return;
  }

  addMessage('ghost', `유령에게 잡혔다... 목숨이 1개 남았다.`);
  game.player = { x: game.stageConfig.start.x, y: game.stageConfig.start.y };
  game.catchGraceUntil = performance.now() + 900;
  game.ghost = chooseGhostSpawn();
  updateUI();
}

function completeStage() {
  if (game.ended || game.state !== 'running') return;

  const nextStageIndex = game.stageIndex + 1;
  game.state = 'transition';
  game.ended = true;

  if (nextStageIndex >= STAGE_CONFIGS.length) {
    addMessage('clear', '탈출에 성공했다! GOOD ENDING');
    showOverlay('GOOD ENDING', '모든 단계를 통과했다. 신호가 끊겼다.', ICONS.clear, '다시 시작', 'restart', startGame);
    playSound('clear');
    updateUI();
    return;
  }

  addMessage('clear', `${game.stageConfig.label} CLEAR`);
  showOverlay(
    `STAGE ${game.stageIndex + 1} CLEAR`,
    `다음 구역으로 이동한다. ${STAGE_CONFIGS[nextStageIndex].name}에 진입한다.`,
    ICONS.clear,
    '다음 단계',
    'stage',
    () => {
      resetGame(nextStageIndex);
    }
  );
  playSound('clear');

  setTimeout(() => {
    if (game.ended && game.state === 'transition') {
      resetGame(nextStageIndex);
    }
  }, 1200);
}

function addMessage(icon, text) {
  game.messages.unshift({ icon, text });
  game.messages = game.messages.slice(0, 5);
  renderMessages();
}

function renderMessages() {
  messageList.innerHTML = '';
  for (const message of game.messages) {
    const li = document.createElement('li');
    li.className = 'message-item';
    li.innerHTML = `
      <div class="message-item__icon">${message.icon === 'info' ? ICONS.info : message.icon === 'key' ? ICONS.key : message.icon === 'door' ? ICONS.door : message.icon === 'ghost' ? ICONS.ghost : message.icon === 'clear' ? ICONS.clear : '•'}</div>
      <div class="message-item__text">${message.text}</div>
    `;
    messageList.appendChild(li);
  }
}

function showOverlay(title, text, emoji, buttonText, mode, onClick = null) {
  overlayTitle.textContent = title;
  overlayText.textContent = text;
  overlayEmoji.textContent = emoji;
  overlayButton.textContent = buttonText;
  overlay.dataset.mode = mode;
  overlayButtonHandler = onClick;
  overlay.classList.add('overlay--visible');
}

function hideOverlay() {
  overlay.classList.remove('overlay--visible');
}

function getTile(x, y) {
  if (!inBounds(x, y)) return TILE.TREE;
  return game.map[y][x];
}

function setTile(x, y, tile) {
  if (!inBounds(x, y)) return;
  game.map[y][x] = tile;
}

function movePlayer(dx, dy) {
  if (game.state !== 'running' || game.ended) return;
  const nx = game.player.x + dx;
  const ny = game.player.y + dy;
  const tile = getTile(nx, ny);
  if (tile === TILE.DOOR) {
    if (game.keyFound) {
      game.doorUnlocked = true;
      game.player.x = nx;
      game.player.y = ny;
      addMessage('door', '문이 열렸다! 탈출 가능하다.');
      playSound('door');
      updateUI();
      completeStage();
    } else {
      addMessage('door', '문은 잠겨 있다... 열쇠가 필요해 보인다.');
    }
    return;
  }

  if (!isWalkable(tile)) {
    return;
  }

  game.player.x = nx;
  game.player.y = ny;
  game.explored.add(keyFor(nx, ny));
  game.explored.add(keyFor(nx + 1, ny));
  game.explored.add(keyFor(nx - 1, ny));
  game.explored.add(keyFor(nx, ny + 1));
  game.explored.add(keyFor(nx, ny - 1));

  if (!game.keyFound && nx === game.key.x && ny === game.key.y) {
    game.keyFound = true;
    game.key.taken = true;
    setTile(nx, ny, TILE.PATH);
    addMessage('key', '열쇠를 획득했다!');
    playSound('key');
  }

  const distance = manhattan(game.player, game.ghost);
  if (distance <= 0) {
    endGame('over');
  } else {
    updateHints();
    updateUI();
  }
}

function manhattan(a, b) {
  return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
}

function signalDirection() {
  const dx = game.ghost.x - game.player.x;
  const dy = game.ghost.y - game.player.y;
  const horizontal = dx === 0 ? '' : dx > 0 ? '→' : '←';
  const vertical = dy === 0 ? '' : dy > 0 ? '↓' : '↑';
  if (!horizontal && !vertical) return '!!';
  if (vertical && horizontal) return `${vertical}${horizontal}`;
  return vertical || horizontal;
}

function getSignalBarsCount(distance) {
  const bars = clamp(5 - Math.floor(distance / 3), 0, 5);
  return bars;
}

function dangerState(distance) {
  const stage = getCurrentStageConfig();
  if (distance <= stage.dangerRadius) return 'DANGER';
  if (distance <= stage.warningRadius) return 'WARNING';
  return 'SAFE';
}

function updateHints() {
  const stage = getCurrentStageConfig();
  const distance = manhattan(game.player, game.ghost);
  const state = dangerState(distance);
  const bars = getSignalBarsCount(distance);

  signalArrows.textContent = signalDirection();
  signalBars.innerHTML = '';
  for (let i = 0; i < 5; i += 1) {
    const dot = document.createElement('span');
    dot.className = 'signal-dot';
    if (i < bars) dot.classList.add('is-on');
    signalBars.appendChild(dot);
  }

  dangerValue.textContent = state;
  dangerValue.style.color = state === 'DANGER' ? 'var(--danger)' : state === 'WARNING' ? 'var(--warning)' : '#9bc36b';
  stageValue.textContent = stage.label;
  stateValue.textContent = game.ended ? '게임 종료' : game.keyFound ? '열쇠 확보' : '탐색 중';
  hintValue.textContent = game.keyFound ? '출구를 찾아 탈출하라.' : `열쇠를 찾아 문을 열어야 한다.`;

  if (state === 'DANGER') {
    canvas.classList.add('danger-shake');
  } else {
    canvas.classList.remove('danger-shake');
  }
}

function updateUI() {
  const stage = getCurrentStageConfig();
  timeValue.textContent = String(Math.max(0, Math.ceil(game.timeLeft)));
  lifeValue.textContent = String(Math.max(0, game.livesLeft));
  keyValue.textContent = game.keyFound ? 'KEY FOUND' : 'Not found';
  doorValue.textContent = game.keyFound ? 'Escape Available' : 'Locked';
  lifeValue.style.color = game.livesLeft <= 1 ? 'var(--warning)' : '#f4e1bc';
  if (game.keyFound) {
    keyValue.style.color = '#ffd36b';
    doorValue.style.color = '#b5e58f';
  } else {
    keyValue.style.color = '#f4e1bc';
    doorValue.style.color = '#f4e1bc';
  }
  stageValue.textContent = stage.label;
  updateHints();
}

function moveGhost() {
  if (game.state !== 'running' || game.ended) return;
  const stage = getCurrentStageConfig();

  const dx = Math.sign(game.player.x - game.ghost.x);
  const dy = Math.sign(game.player.y - game.ghost.y);
  const distance = manhattan(game.player, game.ghost);
  const speedBias = distance <= stage.warningRadius ? 2 + (stage.ghostAggression || 0) : 1 + Math.max(0, stage.ghostAggression || 0);
  const options = [];

  for (let i = 0; i < speedBias; i += 1) {
    if (Math.abs(game.player.x - game.ghost.x) >= Math.abs(game.player.y - game.ghost.y)) {
      options.push({ x: game.ghost.x + dx, y: game.ghost.y });
      if (dy !== 0) options.push({ x: game.ghost.x, y: game.ghost.y + dy });
    } else {
      options.push({ x: game.ghost.x, y: game.ghost.y + dy });
      if (dx !== 0) options.push({ x: game.ghost.x + dx, y: game.ghost.y });
    }
  }

  let next = options.find((candidate) => inBounds(candidate.x, candidate.y));
  if (!next) {
    next = {
      x: clamp(game.ghost.x + dx, 0, CONFIG.width - 1),
      y: clamp(game.ghost.y + dy, 0, CONFIG.height - 1)
    };
  }

  game.ghost.x = next.x;
  game.ghost.y = next.y;
  game.ghost.visible = distance <= Math.max(2, stage.visionRadius - 1);
  game.ghost.pulse = 1;
  game.heartbeat = 1;

  if (performance.now() < game.catchGraceUntil) {
    return;
  }

  if (manhattan(game.player, game.ghost) <= 0) {
    handleGhostCatch();
    return;
  }

  if (stage.ghostAggression && distance <= stage.warningRadius && Math.random() < 0.45) {
    const followDx = Math.sign(game.player.x - game.ghost.x);
    const followDy = Math.sign(game.player.y - game.ghost.y);
    const followX = clamp(game.ghost.x + followDx, 0, CONFIG.width - 1);
    const followY = clamp(game.ghost.y + followDy, 0, CONFIG.height - 1);
    if (isWalkable(getTile(followX, followY))) {
      game.ghost.x = followX;
      game.ghost.y = followY;
      if (manhattan(game.player, game.ghost) <= 0) {
        handleGhostCatch();
      }
    }
  } else if (distance <= 2 && Math.random() < 0.35) {
    addMessage('ghost', '차가운 기운이 바로 뒤에 있다...');
  }
}

function drawTileBase(x, y, tile) {
  const size = CONFIG.tile;
  const px = x * size;
  const py = y * size;
  const palette = getCurrentStageConfig().palette;

  if (tile === TILE.PATH) {
    ctx.fillStyle = palette.pathA;
    ctx.fillRect(px, py, size, size);
    ctx.fillStyle = palette.pathB;
    ctx.fillRect(px + 5, py + 6, size - 10, size - 12);
    ctx.fillStyle = 'rgba(255,255,255,0.04)';
    ctx.fillRect(px + 2, py + 4, 4, 4);
    return;
  }

  if (tile === TILE.GRASS || tile === TILE.KEY || tile === TILE.DOOR) {
    const base = ctx.createLinearGradient(px, py, px + size, py + size);
    base.addColorStop(0, palette.grassA);
    base.addColorStop(1, palette.grassB);
    ctx.fillStyle = base;
    ctx.fillRect(px, py, size, size);
    ctx.fillStyle = 'rgba(118, 173, 84, 0.16)';
    ctx.fillRect(px + 3, py + 2, 6, 4);
    ctx.fillRect(px + 17, py + 18, 5, 5);
    ctx.fillStyle = 'rgba(18, 28, 18, 0.16)';
    ctx.fillRect(px + 22, py + 8, 3, 3);
    return;
  }

  const dirt = ctx.createLinearGradient(px, py, px, py + size);
  dirt.addColorStop(0, '#1f3421');
  dirt.addColorStop(1, '#14231a');
  ctx.fillStyle = dirt;
  ctx.fillRect(px, py, size, size);
}

function drawTree(x, y, variant = 0) {
  const px = x * CONFIG.tile;
  const py = y * CONFIG.tile;
  ctx.fillStyle = '#342317';
  ctx.fillRect(px + 13, py + 19, 6, 10);
  ctx.fillStyle = variant % 2 === 0 ? '#547f33' : '#456b2d';
  ctx.fillRect(px + 9, py + 3, 14, 8);
  ctx.fillRect(px + 6, py + 10, 20, 9);
  ctx.fillRect(px + 3, py + 17, 26, 7);
  ctx.fillStyle = 'rgba(255,255,255,0.08)';
  ctx.fillRect(px + 11, py + 6, 5, 4);
  ctx.fillStyle = '#2b421b';
  ctx.fillRect(px + 10, py + 20, 8, 8);
}

function drawRock(x, y) {
  const px = x * CONFIG.tile;
  const py = y * CONFIG.tile;
  ctx.fillStyle = '#5d6470';
  ctx.fillRect(px + 8, py + 12, 18, 12);
  ctx.fillStyle = '#8b909b';
  ctx.fillRect(px + 10, py + 9, 12, 5);
  ctx.fillStyle = '#3d424b';
  ctx.fillRect(px + 12, py + 15, 12, 4);
}

function drawBush(x, y) {
  const px = x * CONFIG.tile;
  const py = y * CONFIG.tile;
  ctx.fillStyle = '#395322';
  ctx.fillRect(px + 7, py + 15, 18, 8);
  ctx.fillStyle = '#5f8a34';
  ctx.fillRect(px + 5, py + 10, 22, 10);
  ctx.fillStyle = 'rgba(255,255,255,0.06)';
  ctx.fillRect(px + 10, py + 12, 6, 4);
}

function drawStump(x, y) {
  const px = x * CONFIG.tile;
  const py = y * CONFIG.tile;
  ctx.fillStyle = '#6f4b2a';
  ctx.fillRect(px + 12, py + 16, 8, 9);
  ctx.fillStyle = '#8a6239';
  ctx.fillRect(px + 10, py + 13, 12, 5);
  ctx.fillStyle = '#3c2616';
  ctx.fillRect(px + 14, py + 18, 4, 3);
}

function drawFence(x, y) {
  const px = x * CONFIG.tile;
  const py = y * CONFIG.tile;
  ctx.fillStyle = '#5f4327';
  ctx.fillRect(px + 5, py + 8, 4, 18);
  ctx.fillRect(px + 14, py + 8, 4, 18);
  ctx.fillRect(px + 23, py + 8, 4, 18);
  ctx.fillStyle = '#7d5b39';
  ctx.fillRect(px + 3, py + 13, 24, 4);
  ctx.fillRect(px + 3, py + 20, 24, 4);
}

function drawDoor(x, y) {
  const px = x * CONFIG.tile;
  const py = y * CONFIG.tile;
  ctx.fillStyle = '#463122';
  ctx.fillRect(px + 6, py + 3, 20, 26);
  ctx.fillStyle = '#8c5f33';
  ctx.fillRect(px + 10, py + 6, 12, 20);
  ctx.fillStyle = '#1d2226';
  ctx.fillRect(px + 13, py + 11, 6, 11);
  ctx.fillStyle = '#d5c08b';
  ctx.fillRect(px + 20, py + 14, 3, 3);
  ctx.fillStyle = 'rgba(170, 200, 220, 0.24)';
  ctx.fillRect(px + 8, py + 4, 3, 22);
}

function drawKey(x, y) {
  const px = x * CONFIG.tile;
  const py = y * CONFIG.tile;
  ctx.save();
  ctx.shadowColor = 'rgba(255, 213, 97, 0.75)';
  ctx.shadowBlur = 8;

  ctx.fillStyle = '#6b4a12';
  ctx.fillRect(px + 9, py + 13, 17, 4);
  ctx.fillRect(px + 18, py + 16, 6, 3);

  ctx.fillStyle = '#f3c84c';
  ctx.fillRect(px + 10, py + 12, 15, 4);
  ctx.fillRect(px + 19, py + 15, 5, 2);
  ctx.fillRect(px + 11, py + 13, 2, 2);
  ctx.fillRect(px + 13, py + 13, 2, 2);
  ctx.fillRect(px + 15, py + 13, 2, 2);
  ctx.fillRect(px + 17, py + 13, 2, 2);
  ctx.fillRect(px + 20, py + 16, 2, 2);
  ctx.fillRect(px + 22, py + 16, 2, 2);

  ctx.fillStyle = '#8c6518';
  ctx.fillRect(px + 14, py + 10, 4, 4);
  ctx.fillRect(px + 13, py + 9, 6, 2);
  ctx.fillStyle = '#ffe7a6';
  ctx.fillRect(px + 15, py + 10, 2, 2);

  ctx.fillStyle = '#f4cf62';
  ctx.fillRect(px + 8, py + 9, 7, 7);
  ctx.fillStyle = '#6b4a12';
  ctx.fillRect(px + 10, py + 11, 3, 3);
  ctx.fillStyle = '#ffe7a6';
  ctx.fillRect(px + 11, py + 12, 1, 1);

  ctx.restore();
}

function drawPlayer(x, y, t) {
  const px = x * CONFIG.tile;
  const py = y * CONFIG.tile;
  const bob = Math.sin(t * 0.006) * 1.5;
  ctx.save();
  ctx.translate(px, py + bob);

  ctx.fillStyle = '#1f1614';
  ctx.fillRect(11, 6, 10, 7);
  ctx.fillRect(8, 8, 16, 6);
  ctx.fillStyle = '#2f241c';
  ctx.fillRect(8, 13, 16, 5);
  ctx.fillStyle = '#dda56d';
  ctx.fillRect(11, 10, 10, 10);
  ctx.fillStyle = '#20304e';
  ctx.fillRect(10, 20, 12, 6);
  ctx.fillStyle = '#7c4a2d';
  ctx.fillRect(9, 20, 3, 7);
  ctx.fillRect(20, 20, 3, 7);
  ctx.fillStyle = '#efc48b';
  ctx.fillRect(13, 17, 4, 2);
  ctx.fillStyle = '#0f0f0f';
  ctx.fillRect(14, 12, 2, 2);
  ctx.fillRect(18, 12, 2, 2);
  ctx.restore();
}

function drawGhost(x, y, t) {
  const px = x * CONFIG.tile;
  const py = y * CONFIG.tile;
  const shimmer = 0.58 + Math.sin(t * 0.01) * 0.12;
  ctx.save();
  ctx.globalAlpha = shimmer;
  ctx.shadowColor = 'rgba(220, 236, 255, 0.7)';
  ctx.shadowBlur = 8;
  ctx.fillStyle = 'rgba(224, 240, 255, 0.74)';
  ctx.fillRect(px + 10, py + 7, 12, 14);
  ctx.fillRect(px + 8, py + 12, 16, 8);
  ctx.fillRect(px + 12, py + 18, 8, 6);
  ctx.fillStyle = 'rgba(92, 104, 126, 0.55)';
  ctx.fillRect(px + 13, py + 11, 2, 2);
  ctx.fillRect(px + 18, py + 11, 2, 2);
  ctx.restore();
}

function drawFog(t) {
  const stage = getCurrentStageConfig();
  ctx.fillStyle = 'rgba(2, 7, 10, 0.35)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const cx = game.player.x * CONFIG.tile + CONFIG.tile / 2;
  const cy = game.player.y * CONFIG.tile + CONFIG.tile / 2;
  const gradient = ctx.createRadialGradient(cx, cy, 20, cx, cy, 150);
  gradient.addColorStop(0, stage.palette.fogCenter);
  gradient.addColorStop(0.35, stage.palette.fogMid);
  gradient.addColorStop(0.7, stage.palette.fogOuter);
  gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < CONFIG.height; y += 1) {
    for (let x = 0; x < CONFIG.width; x += 1) {
      const visible = Math.abs(x - game.player.x) + Math.abs(y - game.player.y) <= stage.visionRadius;
      const explored = game.explored.has(keyFor(x, y)) || visible;
      if (!visible && !explored) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.58)';
      } else if (!visible) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
      } else {
        continue;
      }
      ctx.fillRect(x * CONFIG.tile, y * CONFIG.tile, CONFIG.tile, CONFIG.tile);
    }
  }

  ctx.fillStyle = 'rgba(10, 14, 20, 0.25)';
  ctx.fillRect(0, 0, canvas.width, 8);
}

function drawMap(t) {
  if (!game.map.length) {
    ctx.fillStyle = getCurrentStageConfig().palette.backdrop;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    return;
  }

  const stage = getCurrentStageConfig();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = stage.palette.backdrop;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < CONFIG.height; y += 1) {
    for (let x = 0; x < CONFIG.width; x += 1) {
      drawTileBase(x, y, game.map[y][x]);
      const tile = game.map[y][x];
      if (tile === TILE.TREE) drawTree(x, y, (x + y) % 2);
      else if (tile === TILE.ROCK) drawRock(x, y);
      else if (tile === TILE.BUSH) drawBush(x, y);
      else if (tile === TILE.STUMP) drawStump(x, y);
      else if (tile === TILE.FENCE) drawFence(x, y);
      else if (tile === TILE.DOOR) drawDoor(x, y);
      else if (tile === TILE.KEY && !game.keyFound) drawKey(x, y);
    }
  }

  if (game.keyFound) {
    const glow = ctx.createRadialGradient(
      game.door.x * CONFIG.tile + 16,
      game.door.y * CONFIG.tile + 16,
      8,
      game.door.x * CONFIG.tile + 16,
      game.door.y * CONFIG.tile + 16,
      40
    );
    glow.addColorStop(0, 'rgba(190, 255, 170, 0.18)');
    glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = glow;
    ctx.fillRect(game.door.x * CONFIG.tile - 16, game.door.y * CONFIG.tile - 16, 64, 64);
  }

  drawFog(t);

  const ghostDistance = manhattan(game.player, game.ghost);
  const ghostVisible = ghostDistance <= 3 || game.ghost.visible;
  if (ghostVisible && !game.ended) {
    drawGhost(game.ghost.x, game.ghost.y, t);
  }

  drawPlayer(game.player.x, game.player.y, t);
}

function tick(delta) {
  if (game.state !== 'running' || game.ended) return;
  const stage = getCurrentStageConfig();

  game.timeLeft -= delta / 1000;
  if (game.timeLeft <= 0) {
    game.timeLeft = 0;
    updateUI();
    endGame('over');
    return;
  }

  if (performance.now() - game.lastGhostStep > stage.ghostStepMs) {
    game.lastGhostStep = performance.now();
    moveGhost();
  }

  game.heartbeat = clamp(game.heartbeat - delta / 500, 0, 1);
  updateUI();
}

function loop(now) {
  if (!game.lastFrame) game.lastFrame = now;
  const delta = now - game.lastFrame;
  game.lastFrame = now;
  tick(delta);
  drawMap(now);
  requestAnimationFrame(loop);
}

function handleKey(event) {
  if (event.repeat) return;
  const key = event.key.toLowerCase();

  if (key === 'enter') {
    event.preventDefault();
    if (overlay.classList.contains('overlay--visible')) {
      if (overlayButtonHandler) {
        overlayButtonHandler();
      } else {
        startGame();
      }
    } else if (game.titleMode || game.ended) {
      startGame();
    }
    return;
  }

  if (key === 'r') {
    event.preventDefault();
    startGame();
    return;
  }

  const directions = {
    arrowup: [0, -1],
    w: [0, -1],
    arrowdown: [0, 1],
    s: [0, 1],
    arrowleft: [-1, 0],
    a: [-1, 0],
    arrowright: [1, 0],
    d: [1, 0]
  };

  if (directions[key]) {
    event.preventDefault();
    ensureAudio();
    if (audio.context && audio.context.state === 'suspended') {
      audio.context.resume().catch(() => {});
    }
    movePlayer(...directions[key]);
  }
}

function setupMobileControls() {
  mobileButtons.forEach((button) => {
    button.addEventListener('click', () => {
      ensureAudio();
      const dir = button.dataset.dir;
      if (dir === 'up') movePlayer(0, -1);
      if (dir === 'down') movePlayer(0, 1);
      if (dir === 'left') movePlayer(-1, 0);
      if (dir === 'right') movePlayer(1, 0);
    });
  });
}

overlayButton.addEventListener('click', () => {
  if (overlayButtonHandler) {
    overlayButtonHandler();
  }
});

document.addEventListener('keydown', handleKey);
setupMobileControls();

showOverlay(
  'GHOST SIGNAL',
  '숲은 조용하지만, 무언가 당신을 쫓고 있다. 방향키로 움직이며 열쇠를 찾고 출구로 탈출하라.',
  ICONS.start,
  '시작하기',
  'start',
  startGame
);
game.titleMode = true;
generateMap();
game.messages = [
  { icon: 'info', text: 'Enter를 누르면 시작한다.' },
  { icon: 'info', text: '방향키로 이동하고 R로 다시 시작할 수 있다.' }
];
renderMessages();
updateUI();
drawMap(performance.now());
requestAnimationFrame(loop);
