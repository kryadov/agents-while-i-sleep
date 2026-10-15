# Агенты работают, даже когда я сплю

*если есть бэклог или есть что улучшать — в том числе по секьюрити*

Доклад для Batumi meetup: подъём по лестнице AI-разработки L1→L9 на трёх проектах.

**Слайды:** https://kryadov.github.io/batumi-meetup-1/ · in English: https://kryadov.github.io/batumi-meetup-1/en.html

Управление: `←` `→` / пробел — листать, `N` — заметки спикера, `F` — полный экран, `L` или кнопка EN/RU — другой язык на том же слайде, `#5` в адресе — сразу на 5-й слайд. Печать в PDF: Ctrl+P (каждый слайд на отдельной странице). QR-коды — статические SVG в `qr/`, интернет для них не нужен.

## План (~40 мин)

| # | Блок | Ступенька | Время | Слайды |
|---|---|---|---|---|
| 0 | Обо мне (сайт + QR). Для заказчиков — агенты для их внутренних продуктов, наружу только анонсы в прессе ([Azul](https://www.azul.com/newsroom/azul-launches-ai-assistant-that-tells-it-and-security-teams-where-java-licensing-and-security-risk-is-hiding)), для себя — за рамками. Вериги $20 Claude Pro + $100 OpenRouter (GLM/Kimi): когда effort medium = x-high? Лестница L1–L9 | — | 6 мин | 1–6 |
| 1 | **Race the City**: мир как данные; архитектура OSM + высоты + погода без сервера на Pages — почему это отлично и чем за это платишь; релиз каждые 30 минут, boot-check, где ошибался агент, спека → план → код, opencode на GLM в CI | L4 → L5 | 13 мин | 7–14 |
| 2 | Узкое место — я: треть коммитов ночью → **claude-remote-vm-dev**: tmux + worktree на VM, провайдеры, периметр; что дать агенту на ночь — секьюрити: npm audit 9 → 0 одним коммитом | L5 → L6 | 7 мин | 15–18 |
| 3 | **itffm**: YAML вместо 3D-художника; «карту побольше» → бесконечный лес и 6 часов автономной работы; 11 сентября: одно моё решение → семь веток `worktree-agent-*` за 50 минут; L6 vs L7 — один `git worktree`, два оркестратора (я / Claude Code), сессии с VM, из облака и с телефона; Opus планирует, Sonnet делает; что тесты не ловят | L6 → L7 | 10 мин | 19–24 |
| 4 | Ответ про effort по классам задач; лес на синке фаундеров; сводная таблица, пять правил, L8–L9, вопросы + QR | → L8 | 5 мин | 25–30 |

Две живые демки: Race the City (слайд 7) и itffm (слайд 19).

## Проекты

- https://race-the-city.games — [kryadov/race-the-city](https://github.com/kryadov/race-the-city)
- https://kryadov.github.io/itffm/ — [kryadov/itffm](https://github.com/kryadov/itffm)
- [kryadov/claude-remote-vm-dev](https://github.com/kryadov/claude-remote-vm-dev)

Текст анонса: [ANNOUNCE.md](ANNOUNCE.md).
