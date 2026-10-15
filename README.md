# Агенты работают, даже когда я сплю

*если есть бэклог или есть что улучшать — в том числе по секьюрити*

Доклад для Batumi meetup: подъём по лестнице AI-разработки L1→L9 на трёх проектах.

**Слайды:** https://kryadov.github.io/batumi-meetup-1/

Управление: `←` `→` / пробел — листать, `N` — заметки спикера, `F` — полный экран, `#5` в адресе — сразу на 5-й слайд. Печать в PDF: Ctrl+P (каждый слайд на отдельной странице). QR-коды — статические SVG в `qr/`, интернет для них не нужен.

## План (~38 мин)

| # | Блок | Ступенька | Время | Слайды |
|---|---|---|---|---|
| 0 | Обо мне (сайт + QR). На работе — агенты для внутренних продуктов, наружу только анонсы в прессе ([Azul](https://www.azul.com/newsroom/azul-launches-ai-assistant-that-tells-it-and-security-teams-where-java-licensing-and-security-risk-is-hiding)), после работы — за рамками. Вериги $20 Claude Pro + $100 OpenRouter (GLM/Kimi): когда effort medium = x-high? Лестница L1–L9 | — | 6 мин | 1–6 |
| 1 | **Race the City**: мир как данные; архитектура OSM + высоты + погода без сервера на Pages — почему это отлично и чем за это платишь; релиз каждые 30 минут, boot-check, где ошибался агент, спека → план → код, opencode на GLM в CI | L4 → L5 | 13 мин | 7–14 |
| 2 | Узкое место — я: треть коммитов ночью → **claude-remote-vm-dev**: tmux + worktree на VM, провайдеры, периметр; что дать агенту на ночь — секьюрити: npm audit 9 → 0 одним коммитом | L5 → L6 | 7 мин | 15–18 |
| 3 | **itffm**: YAML вместо 3D-художника; «карту побольше» → бесконечный лес и 6 часов автономной работы; параллельные субагенты, Opus планирует, Sonnet делает; что тесты не ловят | L6 → L7 | 8 мин | 19–23 |
| 4 | Ответ про effort по классам задач; лес на синке фаундеров; сводная таблица, пять правил, L8–L9, вопросы + QR | → L8 | 5 мин | 24–29 |

Две живые демки: Race the City (слайд 7) и itffm (слайд 19).

## Проекты

- https://race-the-city.games — [kryadov/race-the-city](https://github.com/kryadov/race-the-city)
- https://kryadov.github.io/itffm/ — [kryadov/itffm](https://github.com/kryadov/itffm)
- [kryadov/claude-remote-vm-dev](https://github.com/kryadov/claude-remote-vm-dev)

Текст анонса: [ANNOUNCE.md](ANNOUNCE.md).
