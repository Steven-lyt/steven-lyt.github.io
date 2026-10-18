/* Shared by every page of Neon Arcade.
   - I18N: English / 繁體中文 switch (saved in localStorage, applies to the whole site)
   - ACH:  achievements (saved in localStorage, shown on the menu page)
   Games stay playable if this file fails to load: they guard every call. */
(function () {
  'use strict';

  // ---------------------------------------------------------------- storage
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  // ---------------------------------------------------------------- language
  let lang = lsGet('arcade.lang') === 'zh' ? 'zh' : 'en';

  const ZH = {
    // site / menu
    '← Menu': '← 選單',
    'Snake': '貪吃蛇', 'Tetris': '俄羅斯方塊', 'Neon Runner': '霓虹跑酷', 'F1 Reaction': 'F1 起跑反應', 'Volt Dash': 'Volt 衝刺',
    'Eat the food to grow longer and avoid the walls and yourself. Three difficulty levels plus a wrap-around mode.': '吃食物讓身體變長，避開牆壁和自己。三種難度，另有穿牆模式。',
    'Stack the blocks and clear full rows. Includes hold, ghost piece, and combo scoring.': '堆疊方塊並消除整列。有保留、幽靈方塊和連擊計分。',
    'Jump over crystals and duck under drones. The longer you survive, the faster it gets.': '跳過水晶，蹲過無人機。活得越久，速度越快。',
    'Five red lights, then lights out. React as fast as you can. The wait is random every time.': '五盞紅燈，然後熄滅。盡快反應。每次等待時間都是隨機的。',
    'Slide the tiles and merge matching numbers. Reach 2048, then keep going. Includes undo.': '滑動方塊，合併相同數字。合出 2048 後還能繼續。可以復原。',
    'A side-scrolling platformer. Stomp bugs, bump blocks, dodge spikes and reach the gate. 3 levels.': '橫向捲軸跳台遊戲。踩扁蟲子、頂方塊、閃開尖刺，抵達大門。共 3 關。',
    'Not played yet': '尚未遊玩',
    'All': '全部', 'Action': '動作', 'Puzzle': '益智', 'Strategy': '策略', 'Skill': '技巧',
    'Last played': '上次玩的', 'New': '新', 'Play': '開始', 'Play now': '立即開始', 'Random game': '隨機一款',
    'games': '款遊戲', 'plays': '次遊玩', 'achievements': '成就', 'Arcade': '街機',
    'Filter games': '篩選遊戲', 'Source on GitHub': 'GitHub 原始碼',
    'Play →': '開始 →',
    'MORE GAMES COMING SOON': '更多遊戲即將推出',
    'Play with a keyboard on desktop or touch on mobile': '電腦用鍵盤玩，手機用觸控玩',
    'Best scores are saved in this browser': '最高分會存在這個瀏覽器裡',
    'Achievements': '成就',
    'Achievement unlocked': '解鎖成就',
    'Locked': '未解鎖',
    'Best': '最高分',

    // common labels
    'SCORE': '分數', 'BEST': '最高', 'LEVEL': '等級', 'LINES': '行數', 'SPEED': '速度',
    'LAST': '上次', 'AVERAGE': '平均', 'TRIES': '次數', 'HOLD': '保留', 'NEXT': '下一個', 'DROP': '直落',
    'CLASSIC ARCADE': '經典街機',
    'Ready?': '準備好了嗎？', 'Start Game': '開始遊戲', 'Paused': '暫停', 'Resume': '繼續',
    'Game over': '遊戲結束', 'Game Over': '遊戲結束', 'Play again': '再玩一次', 'Play Again': '再玩一次',
    'You win!': '你贏了！', '🏆 New record!': '🏆 新紀錄！',
    'Pause': '暫停', 'Sound': '音效', 'GO!': '開始！',
    'Easy': '簡單', 'Normal': '普通', 'Hard': '困難', 'Ghost': '幽靈方塊', 'Wrap-around': '穿牆模式',
    'Move': '移動', 'Rotate': '旋轉', 'Rotate back': '反向旋轉', 'Soft drop': '慢速下落', 'Hard drop': '直接落下', 'Hold': '保留',
    'or': '或',

    // snake
    'NEON SNAKE': '霓虹貪吃蛇',
    'Eat food to grow. Avoid walls and yourself.': '吃食物變長，避開牆壁和自己。',
    'to move': '移動', 'pause / start': '暫停 / 開始',

    // tetris
    'NEON TETRIS': '霓虹俄羅斯方塊',
    'Fill a whole row to clear it': '填滿一整列就能消除',
    'Start level': '起始等級',
    'TETRIS!': '四排！', 'Single': '單消', 'Double': '雙消', 'Triple': '三消',

    // runner
    'NEON RUNNER': '霓虹跑酷',
    'Jump over crystals and duck under drones.': '跳過水晶，蹲過無人機。',
    'DUCK ▼': '蹲下 ▼', 'JUMP ▲': '跳躍 ▲',
    'jump (hold for a higher jump)': '跳躍（按住跳得更高）',
    'duck / fast fall': '蹲下 / 快速落下',
    'pause': '暫停',

    // reaction
    'F1 REACTION': 'F1 反應挑戰',
    'START LIGHTS CHALLENGE': '起跑燈挑戰',
    'Five red lights, then lights out.': '五盞紅燈，然後熄滅。',
    'Wait for it…': '等待燈滅…',
    'Don’t move until all the lights go out.': '燈全部熄滅前不要動。',
    'GET READY': '準備',
    'Run cancelled. Nothing was recorded.': '已取消，這次沒有記錄。',
    'PRESS SPACE OR TAP TO START': '按空白鍵或點擊開始',
    'PRESS SPACE OR TAP TO TRY AGAIN': '按空白鍵或點擊再試一次',
    'PRESS SPACE OR TAP TO GO AGAIN': '按空白鍵或點擊再來一次',
    'FALSE START': '偷跑',
    'HIT IT!': '按！',
    'EXCELLENT': '太強了', 'GOOD': '不錯', 'DECENT': '還行', 'KEEP PRACTICING': '繼續練習',
    'You moved before the lights went out.': '燈還沒熄滅你就動了。',
    'Under {0} is faster than a human can react, so it counts as a jump start.': '低於 {0} 比人類的反應還快，所以算偷跑。',
    'NEW BEST!': '新最佳！', 'First time on the board!': '第一次上榜！', 'Ties your best.': '與最佳成績相同。',
    '+{0} vs your best.': '比最佳慢 {0}。', 'Lights out after {0}.': '熄燈前等了 {0}。',
    'No attempts yet. Your reaction times will show up here.': '還沒有紀錄。你的反應時間會顯示在這裡。',
    'RECENT ATTEMPTS': '最近紀錄', 'Clear': '清除',
    'REACTION': '反應', 'TIME': '時間', 'LIGHTS OUT AFTER': '熄燈等待',
    '/ click / tap to react': '/ 點擊 / 輕點 來反應', 'cancel a run': '取消這次',
    'Pressing before the lights go out is a false start. Under 0.100 s also counts as a jump start.': '燈熄滅前按下就是偷跑。低於 0.100 秒也算偷跑。',

    // 2048
    'NEON 2048': '霓虹 2048',
    'SLIDE · MERGE · REACH 2048': '滑動 · 合併 · 合出 2048',
    'New game': '新遊戲', 'Undo': '復原', 'Try again': '再試一次', 'Keep going': '繼續玩', 'undo ·': '復原 ·', 'new game': '新遊戲',
    'You made 2048!': '你合出 2048 了！',
    'to slide · or swipe': '滑動方塊 · 或用手指滑動',

    // volt dash
    'VOLT DASH': 'VOLT 衝刺',
    'RUN · JUMP · STOMP · REACH THE GATE': '奔跑 · 跳躍 · 踩扁 · 抵達大門',
    'Help Volt reach the gate. Stomp bugs, bump blocks, grab chips.': '幫 Volt 抵達大門。踩扁蟲子、頂方塊、收集晶片。',
    "Spiked bots can't be stomped. Grab a battery for a one-hit shield.": '帶刺機器人不能踩。吃電池可以擋一次傷害。',
    'Clear a level to unlock the next one.': '通過一關即可解鎖下一關。',
    'Best score': '最高分',
    'Quit to title': '回標題畫面', 'Title': '標題', 'Retry stage': '重玩這關', 'Next stage': '下一關', 'Stage clear!': '過關！',
    'All stages clear!': '全部通關！', 'Score': '分數',
    'move ·': '移動 ·', '/': '/', 'jump (hold for higher) ·': '跳躍（按住跳更高）·', 'run ·': '跑步 ·', 'drop through thin platforms ·': '從薄平台穿下 ·',
    'Silicon Fields': '矽晶原野', 'Circuit Cavern': '電路洞穴', 'Power Plant': '發電廠',
    'CHECKPOINT': '檢查點', '1UP': '加一命',
    'Stage 1': '第 1 關', 'Stage 2': '第 2 關', 'Stage 3': '第 3 關',

    // neon maze
    'Neon Maze': '霓虹迷宮', 'NEON MAZE': '霓虹迷宮',
    'Eat every pellet in a glowing maze while hunters chase you. Grab a power cell to stun them. A new maze every stage.': '在發光迷宮裡吃光所有光點，同時躲開追你的獵手。吃能量電池可以暫時電暈他們。每一關都是新的迷宮。',
    'Eat every pellet and keep away from the hunters.': '吃光所有光點，躲開獵手。',
    'Power cells stun the hunters so you can catch them.': '能量電池能電暈獵手，讓你抓住他們。',
    'STAGE': '關卡', 'READY!': '準備！', 'or swipe': '或滑動手指',
    'Maze Cleared': '走出迷宮', 'Clear a maze in Neon Maze.': '在霓虹迷宮通過一關。',
    'Hunter Hunter': '獵人的獵人', 'Catch all four hunters with one power cell.': '用同一顆能量電池抓到全部四隻獵手。',
    'Deep Maze': '深入迷宮', 'Reach stage 5 in Neon Maze.': '在霓虹迷宮到達第 5 關。',
    'Pellet Hoarder': '光點大胃王', 'Score 10000 in Neon Maze.': '在霓虹迷宮拿到 10000 分。',

    // neon word
    'Neon Word': '霓虹猜字', 'NEON WORD': '霓虹猜字',
    'Guess the hidden five-letter English word in six tries. A new word every day, or play unlimited.': '在六次內猜出隱藏的五字母英文單字。每天一個新單字，也可以無限玩。',
    'Guess the five-letter word in six tries.': '六次內猜出這個五字母單字。',
    'Daily': '每日挑戰', 'Unlimited': '無限模式', 'Statistics': '統計', 'How to play': '玩法',
    'Guess the hidden five-letter English word in six tries.': '在六次內猜出隱藏的五字母英文單字。',
    'Each guess must be a real word. After each guess, the tiles change colour:': '每次猜測都必須是真的單字。送出後，方塊會變色：',
    'Green': '綠色', 'Yellow': '黃色', 'Grey': '灰色',
    ': right letter, right spot.': '：字母和位置都對。',
    ': the letter is in the word, but in another spot.': '：單字裡有這個字母，但位置不同。',
    ': the letter is not in the word.': '：單字裡沒有這個字母。',
    ': one new word every day, the same for everyone.': '：每天一個新單字，所有人都一樣。',
    ': play as many words as you like.': '：想玩幾題就玩幾題。',
    ': every hint you find must be used in your next guess.': '：找到的每個提示，下一次猜測都必須用上。',
    'Hard mode': '困難模式', 'streak': '連勝',
    'ENTER': '送出', 'Delete': '刪除',
    'Not enough letters': '字母不夠', 'Not in word list': '不在字庫裡',
    'Hard mode: use the revealed hints': '困難模式：必須用上已揭曉的提示',
    'Hard mode can only change before your first guess': '困難模式只能在第一次猜之前切換',
    'Genius': '天才', 'Magnificent': '太厲害了', 'Impressive': '好厲害', 'Splendid': '漂亮', 'Great': '不錯', 'Phew': '好險',
    'You got it!': '猜對了！', 'Out of guesses': '次數用完了', 'The word was': '答案是',
    'Played': '場數', 'Win %': '勝率', 'Streak': '連勝', 'Best streak': '最長連勝', 'Guess distribution': '猜測次數分布',
    'Next word in': '下個單字還有', 'Share': '分享', 'New word': '換一個單字',
    'Copied to clipboard': '已複製到剪貼簿', 'Could not copy': '無法複製',
    'Word Found': '找到了', 'Solve a word in Neon Word.': '在霓虹猜字猜出一個單字。',
    'Sharp Mind': '腦筋靈光', 'Solve a word in 3 guesses or fewer.': '在 3 次內猜出一個單字。',
    'Daily Solver': '每日解題者', 'Solve the daily word.': '猜出每日單字。',
    'Three in a Row': '連三天', 'Solve the daily word 3 days in a row.': '連續 3 天猜出每日單字。',
    'No Shortcuts': '不走捷徑', 'Solve a word in Hard mode.': '在困難模式猜出一個單字。',

    // achievements
    'Arcade Regular': '街機常客', 'Play all twelve games.': '每個遊戲都玩過一次。',
    'Hungry Snake': '飢餓小蛇', 'Score 10 in Snake.': '在貪吃蛇得到 10 分。',
    'Long Boy': '長長一條', 'Score 30 in Snake.': '在貪吃蛇得到 30 分。',
    'Four at Once': '一次四排', 'Clear 4 lines with one piece in Tetris.': '在俄羅斯方塊用一個方塊消除 4 行。',
    'Line Cleaner': '消除高手', 'Clear 40 lines in one Tetris game.': '在俄羅斯方塊一場遊戲消除 40 行。',
    'Warm-up': '熱身完成', 'Score 500 in Neon Runner.': '在霓虹跑酷得到 500 分。',
    'Neon Legend': '霓虹傳說', 'Score 1500 in Neon Runner.': '在霓虹跑酷得到 1500 分。',
    'Quick Hands': '快手', 'React in under 0.300 s.': '反應時間低於 0.300 秒。',
    'Lightning Reflexes': '閃電反應', 'React in under 0.200 s.': '反應時間低於 0.200 秒。',
    'Getting Warm': '漸入佳境', 'Make a 512 tile in 2048.': '在 2048 合出 512。',
    'Big Number': '大數字', 'Make a 1024 tile in 2048.': '在 2048 合出 1024。',
    'Two Thousand Club': '兩千俱樂部', 'Make a 2048 tile.': '合出 2048。',
    'First Gate': '第一道門', 'Clear level 1-1 in Volt Dash.': '通過 Volt 衝刺的 1-1 關。',
    'Gate Master': '大門終結者', 'Clear all three levels of Volt Dash.': '通過 Volt 衝刺的全部三關。',
    'Flawless Run': '完美通關', 'Clear a level without losing a life.': '不損失任何生命通過一關。',
    'Fully Charged': '充滿電', 'Grab a battery in Volt Dash.': '在 Volt 衝刺拿到一顆電池。',
    'Wall Breaker': '破牆者', 'Clear level 1 in Breakout.': '在打磚塊通過第 1 關。',
    'Demolition Crew': '拆除小隊', 'Reach level 3 in Breakout.': '在打磚塊到達第 3 關。',
    'Chain Reaction': '連鎖反應', 'Break 10 bricks without touching the paddle.': '不碰擋板連續打破 10 塊磚。',
    'Holding the Line': '堅守陣線', 'Reach wave 10 in Tower Defense.': '在塔防到達第 10 波。',
    'Fortress': '堅不可摧', 'Survive all 20 waves in Tower Defense.': '在塔防撐過全部 20 波。',
    'Fully Upgraded': '滿級防禦', 'Upgrade a tower to level 3.': '把一座塔升到 3 級。',
    'Boss Slayer': '首領終結者', 'Defeat a boss in Tower Defense.': '在塔防擊敗一隻首領。',
    'Ace Pilot': '王牌飛行員', 'Score 5000 in Space Shooter.': '在太空射擊得到 5000 分。',
    'Top Gun': '空戰之王', 'Score 20000 in Space Shooter.': '在太空射擊得到 20000 分。',
    'Boss Down': '首領倒下', 'Defeat a boss in Space Shooter.': '在太空射擊擊敗一隻首領。',
    'Fully Armed': '火力全開', 'Reach weapon level 4 in Space Shooter.': '在太空射擊把武器升到 4 級。',
    'Sweep Rookie': '掃雷新手', 'Win an Easy game of Minesweeper.': '贏下一場簡單難度的踩地雷。',
    'Bomb Disposal': '拆彈專家', 'Win a Medium game of Minesweeper.': '贏下一場中等難度的踩地雷。',
    'Mine Master': '掃雷大師', 'Win a Hard game of Minesweeper.': '贏下一場困難難度的踩地雷。',
    'Lightning Sweep': '閃電掃雷', 'Win Easy in under 40 seconds.': '在 40 秒內贏下簡單難度。',

    // minesweeper
    'Minesweeper': '踩地雷', 'NEON SWEEPER': '霓虹踩地雷',
    'Clear the field without hitting a mine. Three sizes, a safe first click, flags and chording.': '不踩到地雷，清空整片場地。三種大小、第一步保證安全，可插旗和快速開格。',
    'MINES': '地雷', 'Medium': '中等', 'Mode': '模式', 'Dig': '挖掘', 'Flag': '插旗',
    'Left click to dig, right click to flag.': '左鍵挖掘，右鍵插旗。',
    'On touch: tap to dig, long-press to flag.': '觸控：點一下挖掘，長按插旗。',
    'Click a number to clear around it once its flags match.': '旗子數量與數字相符時，點擊數字可一次打開周圍格子。',
    'move': '移動', 'dig': '挖掘', 'flag': '插旗',
    'Boom! You hit a mine.': '轟！你踩到地雷了。', 'Best time {0}': '最佳時間 {0}',

    // space shooter
    'Space Shooter': '太空射擊', 'NEON SHOOTER': '霓虹太空射擊',
    'Blast through waves of aliens with auto-fire. Power up your weapon, dodge bullets and bomb the bosses.': '自動射擊，擊退一波波外星人。升級武器、閃避子彈，用炸彈對付首領。',
    'Shoot down the alien fleet. Catch power-ups and bomb the bosses.': '擊落外星艦隊。接住道具，用炸彈對付首領。',
    'BOMBS': '炸彈', 'Bomb': '炸彈', 'WEAPON UP': '火力提升', 'SHIELD': '護盾', 'BOMB': '炸彈',
    'Stage {0}': '第 {0} 關', 'WARNING: BOSS': '警告：首領接近',
    'Auto-fire': '自動射擊', 'bomb': '炸彈',

    // tower defense
    'Tower Defense': '塔防', 'NEON DEFENSE': '霓虹塔防',
    'Build and upgrade towers to stop waves of enemies. 4 tower types, 3 maps and boss waves.': '建造並升級防禦塔，擋下一波又一波敵人。4 種塔、3 張地圖，還有首領關。',
    'GOLD': '金幣', 'WAVE': '波數',
    'Survive all 20 waves. Build towers, upgrade them, and keep your core alive.': '撐過全部 20 波。建造並升級防禦塔，保護你的核心。',
    'Zigzag': '蛇行', 'Spiral': '螺旋', 'Gauntlet': '長廊',
    'Pulse': '脈衝塔', 'Frost': '冰霜塔', 'Cannon': '加農砲', 'Rail': '電磁砲',
    'Fast, cheap all-rounder.': '射速快、便宜的全能塔。', 'Slows enemies down.': '讓敵人減速。',
    'Splash damage, slow reload.': '範圍傷害，裝填較慢。', 'Long range, huge damage. Level 3 pierces.': '射程遠、傷害高。3 級可貫穿。',
    'Pick a tower, then tap a free tile to build it. Tap a tower to upgrade it.': '先選一種塔，再點空地建造。點擊已建的塔可以升級。',
    'Level': '等級', 'Damage': '傷害', 'Rate': '射速', 'Range': '射程', 'Slow': '減速', 'Splash': '範圍', 'Pierce': '貫穿',
    'Upgrade': '升級', 'Max level': '已滿級', 'Sell': '出售', 'Target': '目標',
    'First': '最前', 'Strongest': '最強', 'Closest': '最近',
    'Start wave {0}': '開始第 {0} 波', 'Send wave {0}': '提前派出第 {0} 波', 'Start wave 1': '開始第 1 波', 'Final wave': '最後一波', 'Speed': '速度',
    'build': '建造', 'next wave': '下一波', 'upgrade': '升級', 'speed': '速度',
    'Wave {0}': '第 {0} 波', 'BOSS INCOMING': '首領來襲！', 'Not enough gold': '金幣不足',

    // breakout
    'Breakout': '打磚塊', 'NEON BREAKOUT': '霓虹打磚塊',
    'Bounce the ball off your paddle to smash every brick. Catch power-ups for multiball, lasers and more.': '用擋板反彈球，打碎所有磚塊。接住道具可獲得多球、雷射等效果。',
    'LIVES': '生命',
    'Next level': '下一關', 'Level clear!': '過關！',
    'Break every brick. Catch power-ups.': '打碎所有磚塊，接住道具。',
    'Tap or press Space to launch': '點擊或按空白鍵發球',
    'WIDE': '加寬', 'MULTIBALL': '多球', 'SLOW': '減速', 'LASER': '雷射', 'EXTRA LIFE': '加一命', 'COMBO': '連擊',
    'or move the mouse / drag': '或移動滑鼠 / 手指拖曳', 'launch': '發球'
  };

  // patterns for text that contains numbers (matched against the trimmed text)
  const ON_OFF = { on: '開', off: '關' };
  const OPT = { 'Wrap-around': '穿牆模式', 'Sound': '音效', 'Ghost': '幽靈方塊', 'Hard mode': '困難模式' };
  const RULES = [
    [/^(Wrap-around|Sound|Ghost|Hard mode): (On|Off|on|off)$/, m => OPT[m[1]] + '：' + ON_OFF[m[2].toLowerCase()]],
    [/^Best (\d+)$/, m => '最高分 ' + m[1]],
    [/^· Best (\d+)$/, m => '· 最高分 ' + m[1]],
    [/^Level (\d+) · Best (\d+)$/, m => '等級 ' + m[1] + ' · 最高分 ' + m[2]],
    [/^Reached wave (\d+)$/, m => '到達第 ' + m[1] + ' 波'],
    [/^Reached stage (\d+)$/, m => '到達第 ' + m[1] + ' 關'],
    [/^Level (\d+)$/, m => '等級 ' + m[1]],
    [/^Lines (\d+) · Level (\d+)$/, m => '行數 ' + m[1] + ' · 等級 ' + m[2]],
    [/^(.+?) (\d+)x combo$/, m => tr(m[1]) + ' ' + m[2] + 'x 連擊'],
    [/^Final score (\d+)$/, m => '最終分數 ' + m[1]],
    [/^Score (\d+)$/, m => '分數 ' + m[1]],
    [/^Time bonus (\d+) \+ clear bonus (\d+)$/, m => '時間獎勵 ' + m[1] + ' + 通關獎勵 ' + m[2]],
    [/^· Chips (\d+) · Lives (\d+)$/, m => '· 晶片 ' + m[1] + ' · 生命 ' + m[2]],
    [/^(\d)-(\d) {1,2}(.+)$/, m => m[1] + '-' + m[2] + '  ' + tr(m[3])],
    [/^Press (\w) to resume$/, m => '按 ' + m[1] + ' 繼續']
  ];

  function tr(s) {
    if (lang !== 'zh' || typeof s !== 'string') return s;
    const k = s.trim();
    if (!k) return s;
    let out = ZH[k];
    if (out === undefined) {
      for (const [re, fn] of RULES) {
        const m = re.exec(k);
        if (m) { out = fn(m); break; }
      }
    }
    if (out === undefined) return s;
    return s.slice(0, s.indexOf(k)) + out + s.slice(s.indexOf(k) + k.length);
  }

  function fmt(key) {
    let s = tr(key);
    for (let i = 1; i < arguments.length; i++) s = s.split('{' + (i - 1) + '}').join(arguments[i]);
    return s;
  }

  // --- translate the page's text in Chinese mode (English mode does nothing at all)
  const wrote = new WeakMap();
  function doText(n) {
    const cur = n.nodeValue;
    if (wrote.get(n) === cur) return;           // that is our own write
    const t = tr(cur);
    if (t !== cur) { wrote.set(n, t); n.nodeValue = t; }
  }
  function doAttrs(el) {
    for (const a of ['title', 'aria-label']) {
      if (el.hasAttribute && el.hasAttribute(a)) {
        const v = el.getAttribute(a), t = tr(v);
        if (t !== v) el.setAttribute(a, t);
      }
    }
  }
  function walk(root) {
    if (root.nodeType === 3) { doText(root); return; }
    if (root.nodeType !== 1) return;
    const tag = root.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE') return;
    doAttrs(root);
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT, {
      acceptNode: n => (n.nodeType === 1 && (n.tagName === 'SCRIPT' || n.tagName === 'STYLE')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
    });
    let n;
    while ((n = tw.nextNode())) { if (n.nodeType === 3) doText(n); else doAttrs(n); }
  }

  function startTranslating() {
    document.documentElement.lang = 'zh-Hant';
    document.title = tr(document.title);
    walk(document.body);
    new MutationObserver(muts => {
      for (const m of muts) {
        if (m.type === 'characterData') doText(m.target);
        else if (m.type === 'attributes') doAttrs(m.target);
        else m.addedNodes.forEach(walk);
      }
    }).observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['title', 'aria-label'] });
  }

  function buildSwitch() {
    const box = document.createElement('div');
    box.id = 'langSw';
    box.innerHTML = '<button type="button" data-l="en">EN</button><button type="button" data-l="zh">中文</button>';
    const st = document.createElement('style');
    st.textContent =
      '#langSw{position:fixed;top:8px;right:10px;z-index:60;display:flex;border:1px solid rgba(255,255,255,.14);border-radius:999px;overflow:hidden;background:rgba(255,255,255,.07);backdrop-filter:blur(6px)}' +
      '#langSw button{all:unset;cursor:pointer;padding:4px 10px;font:600 .72rem system-ui,"Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif;color:#8e97c0;letter-spacing:.04em}' +
      '#langSw button:hover{color:#46f0b4}' +
      '#langSw button.on{background:rgba(70,240,180,.2);color:#e8ecff}' +
      '#achToast{position:fixed;left:50%;bottom:22px;transform:translate(-50%,40px);opacity:0;z-index:80;display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:14px;border:1px solid rgba(255,228,92,.5);background:rgba(20,24,52,.94);box-shadow:0 10px 30px rgba(0,0,0,.5),0 0 24px rgba(255,228,92,.2);color:#e8ecff;font:600 .85rem system-ui,"Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif;transition:transform .35s ease,opacity .35s ease;pointer-events:none;max-width:92vw}' +
      '#achToast.show{transform:translate(-50%,0);opacity:1}' +
      '#achToast small{display:block;color:#ffe45c;font-size:.62rem;letter-spacing:.14em;font-weight:700;text-transform:uppercase}' +
      '#achToast .ic{font-size:1.5rem}';
    document.head.appendChild(st);
    box.querySelectorAll('button').forEach(b => {
      b.classList.toggle('on', b.dataset.l === lang);
      b.addEventListener('click', () => setLang(b.dataset.l));
    });
    document.body.appendChild(box);
  }

  const listeners = [];
  function setLang(l) {
    l = l === 'zh' ? 'zh' : 'en';
    if (l === lang) return;
    lsSet('arcade.lang', l);
    location.reload();          // games rebuild their text in the new language
  }

  window.I18N = {
    get lang() { return lang; },
    t: tr,
    f: fmt,
    set: setLang,
    on(cb) { listeners.push(cb); }
  };

  // ---------------------------------------------------------------- achievements
  const ACH_LIST = [
    { id: 'all_games',  icon: '🕹️', name: 'Arcade Regular',     desc: 'Play all twelve games.' },
    { id: 'snk_10',     icon: '🐍', name: 'Hungry Snake',       desc: 'Score 10 in Snake.' },
    { id: 'snk_30',     icon: '🐍', name: 'Long Boy',           desc: 'Score 30 in Snake.' },
    { id: 'tet_four',   icon: '🧱', name: 'Four at Once',       desc: 'Clear 4 lines with one piece in Tetris.' },
    { id: 'tet_40',     icon: '🧱', name: 'Line Cleaner',       desc: 'Clear 40 lines in one Tetris game.' },
    { id: 'run_500',    icon: '🤖', name: 'Warm-up',            desc: 'Score 500 in Neon Runner.' },
    { id: 'run_1500',   icon: '🤖', name: 'Neon Legend',        desc: 'Score 1500 in Neon Runner.' },
    { id: 'rx_300',     icon: '🏁', name: 'Quick Hands',        desc: 'React in under 0.300 s.' },
    { id: 'rx_200',     icon: '🏁', name: 'Lightning Reflexes', desc: 'React in under 0.200 s.' },
    { id: 'g_512',      icon: '🔢', name: 'Getting Warm',       desc: 'Make a 512 tile in 2048.' },
    { id: 'g_1024',     icon: '🔢', name: 'Big Number',         desc: 'Make a 1024 tile in 2048.' },
    { id: 'g_2048',     icon: '🔢', name: 'Two Thousand Club',  desc: 'Make a 2048 tile.' },
    { id: 'vd_l1',      icon: '⚡', name: 'First Gate',         desc: 'Clear level 1-1 in Volt Dash.' },
    { id: 'vd_all',     icon: '⚡', name: 'Gate Master',        desc: 'Clear all three levels of Volt Dash.' },
    { id: 'vd_flawless', icon: '⚡', name: 'Flawless Run',      desc: 'Clear a level without losing a life.' },
    { id: 'vd_battery', icon: '⚡', name: 'Fully Charged',      desc: 'Grab a battery in Volt Dash.' },
    { id: 'bo_l1',      icon: '🏓', name: 'Wall Breaker',       desc: 'Clear level 1 in Breakout.' },
    { id: 'bo_l3',      icon: '🏓', name: 'Demolition Crew',    desc: 'Reach level 3 in Breakout.' },
    { id: 'bo_chain',   icon: '🏓', name: 'Chain Reaction',     desc: 'Break 10 bricks without touching the paddle.' },
    { id: 'td_w10',     icon: '🏰', name: 'Holding the Line',   desc: 'Reach wave 10 in Tower Defense.' },
    { id: 'td_win',     icon: '🏰', name: 'Fortress',           desc: 'Survive all 20 waves in Tower Defense.' },
    { id: 'td_max',     icon: '🏰', name: 'Fully Upgraded',     desc: 'Upgrade a tower to level 3.' },
    { id: 'td_boss',    icon: '🏰', name: 'Boss Slayer',        desc: 'Defeat a boss in Tower Defense.' },
    { id: 'sp_5k',      icon: '🚀', name: 'Ace Pilot',          desc: 'Score 5000 in Space Shooter.' },
    { id: 'sp_20k',     icon: '🚀', name: 'Top Gun',            desc: 'Score 20000 in Space Shooter.' },
    { id: 'sp_boss',    icon: '🚀', name: 'Boss Down',          desc: 'Defeat a boss in Space Shooter.' },
    { id: 'sp_max',     icon: '🚀', name: 'Fully Armed',        desc: 'Reach weapon level 4 in Space Shooter.' },
    { id: 'ms_easy',    icon: '💣', name: 'Sweep Rookie',       desc: 'Win an Easy game of Minesweeper.' },
    { id: 'ms_med',     icon: '💣', name: 'Bomb Disposal',      desc: 'Win a Medium game of Minesweeper.' },
    { id: 'ms_hard',    icon: '💣', name: 'Mine Master',        desc: 'Win a Hard game of Minesweeper.' },
    { id: 'ms_fast',    icon: '💣', name: 'Lightning Sweep',    desc: 'Win Easy in under 40 seconds.' },
    { id: 'mz_clear',   icon: '🌀', name: 'Maze Cleared',       desc: 'Clear a maze in Neon Maze.' },
    { id: 'mz_chain',   icon: '🌀', name: 'Hunter Hunter',      desc: 'Catch all four hunters with one power cell.' },
    { id: 'mz_l5',      icon: '🌀', name: 'Deep Maze',          desc: 'Reach stage 5 in Neon Maze.' },
    { id: 'mz_10k',     icon: '🌀', name: 'Pellet Hoarder',     desc: 'Score 10000 in Neon Maze.' },
    { id: 'wd_win',     icon: '🔤', name: 'Word Found',         desc: 'Solve a word in Neon Word.' },
    { id: 'wd_fast',    icon: '🔤', name: 'Sharp Mind',         desc: 'Solve a word in 3 guesses or fewer.' },
    { id: 'wd_daily',   icon: '🔤', name: 'Daily Solver',       desc: 'Solve the daily word.' },
    { id: 'wd_streak',  icon: '🔤', name: 'Three in a Row',    desc: 'Solve the daily word 3 days in a row.' },
    { id: 'wd_hard',    icon: '🔤', name: 'No Shortcuts',       desc: 'Solve a word in Hard mode.' }
  ];
  const GAMES = ['snake', 'tetris', 'runner', 'reaction', '2048', 'volt', 'breakout', 'td', 'shooter', 'mines', 'maze', 'wordle'];

  function readJSON(k, d) { try { const v = JSON.parse(lsGet(k)); return v && typeof v === 'object' ? v : d; } catch (e) { return d; } }
  let got = readJSON('arcade.ach', {});

  let queue = [], showing = false, toastEl = null;
  function toast(a) {
    queue.push(a);
    if (!showing) next();
  }
  function next() {
    const a = queue.shift();
    if (!a) { showing = false; return; }
    showing = true;
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.id = 'achToast'; document.body.appendChild(toastEl); }
    toastEl.innerHTML = '';
    const ic = document.createElement('span'); ic.className = 'ic'; ic.textContent = '🏆';
    const box = document.createElement('div');
    const sm = document.createElement('small'); sm.textContent = tr('Achievement unlocked');
    const nm = document.createElement('span'); nm.textContent = tr(a.name);
    box.appendChild(sm); box.appendChild(nm);
    toastEl.appendChild(ic); toastEl.appendChild(box);
    requestAnimationFrame(() => toastEl.classList.add('show'));
    setTimeout(() => { toastEl.classList.remove('show'); setTimeout(next, 450); }, 3200);
  }

  const ACH = {
    list() { return ACH_LIST.map(a => Object.assign({ unlocked: !!got[a.id] }, a)); },
    has(id) { return !!got[id]; },
    count() { return ACH_LIST.filter(a => got[a.id]).length; },
    total() { return ACH_LIST.length; },
    unlock(id) {
      const a = ACH_LIST.find(x => x.id === id);
      if (!a || got[id]) return false;
      got[id] = Date.now();
      lsSet('arcade.ach', JSON.stringify(got));
      if (document.body) toast(a); else document.addEventListener('DOMContentLoaded', () => toast(a));
      return true;
    },
    played(game) {
      const p = readJSON('arcade.played', {});
      if (!p[game]) { p[game] = 1; lsSet('arcade.played', JSON.stringify(p)); }
      const pl = readJSON('arcade.plays', {});          // play count and last-played time, for the menu
      const e = pl[game] || { n: 0, t: 0 };
      e.n += 1; e.t = Date.now(); pl[game] = e;
      lsSet('arcade.plays', JSON.stringify(pl));
      if (GAMES.every(g => p[g])) ACH.unlock('all_games');
    }
  };
  window.ACH = ACH;

  // ---------------------------------------------------------------- boot
  function boot() {
    buildSwitch();
    if (lang === 'zh') startTranslating();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
