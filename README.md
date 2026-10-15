# Агенты работают, пока я сплю

*после работы под NDA: две игры, одна VM и 436 релизов*

Доклад для Batumi meetup: подъём по лестнице AI-разработки L1→L9 на трёх проектах.

**Слайды:** https://kryadov.github.io/batumi-meetup-1/

Управление: `←` `→` / пробел — листать, `N` — заметки спикера, `F` — полный экран, `#5` в адресе — сразу на 5-й слайд. Печать в PDF: Ctrl+P (каждый слайд на отдельной странице). QR-коды — статические SVG в `qr/`, интернет для них не нужен.

## План (~35 мин)

| # | Блок | Ступенька | Время | Слайды |
|---|---|---|---|---|
| 0 | Днём — агенты для энтерпрайза под NDA ([Azul](https://www.azul.com/newsroom/azul-launches-ai-assistant-that-tells-it-and-security-teams-where-java-licensing-and-security-risk-is-hiding)), вечером — за рамками. Вериги $20 Claude Pro + $100 OpenRouter (GLM/Kimi): когда effort medium = x-high? Лестница L1–L9 | — | 5 мин | 1–5 |
| 1 | **Race the City**: мир как данные; архитектура OSM + высоты + погода без сервера на Pages — почему это отлично и чем за это платишь; релиз каждые 30 минут, boot-check, где ошибался агент, спека → план → код, opencode на GLM в CI | L4 → L5 | 13 мин | 6–13 |
| 2 | Узкое место — я: треть коммитов ночью → **claude-remote-vm-dev**: tmux + worktree на VM, провайдеры, периметр | L5 → L6 | 5 мин | 14–16 |
| 3 | **itffm**: YAML вместо 3D-художника; «карту побольше» → бесконечный лес и 6 часов автономной работы; параллельные субагенты, Opus планирует, Sonnet делает; что тесты не ловят | L6 → L7 | 8 мин | 17–21 |
| 4 | Ответ про effort по классам задач; лес на синке фаундеров; сводная таблица, пять правил, L8–L9, вопросы + QR | → L8 | 5 мин | 22–27 |

Две живые демки: Race the City (слайд 6) и itffm (слайд 17).

## Проекты

- https://race-the-city.games — [kryadov/race-the-city](https://github.com/kryadov/race-the-city)
- https://kryadov.github.io/itffm/ — [kryadov/itffm](https://github.com/kryadov/itffm)
- [kryadov/claude-remote-vm-dev](https://github.com/kryadov/claude-remote-vm-dev)

Текст анонса: [ANNOUNCE.md](ANNOUNCE.md).
