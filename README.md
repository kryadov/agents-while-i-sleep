# Две игры, одна VM и агенты, которые не спят

Доклад для Batumi meetup: подъём по лестнице AI-разработки L1→L9 на трёх проектах.

**Слайды:** https://kryadov.github.io/batumi-meetup-1/

Управление: `←` `→` / пробел — листать, `N` — заметки спикера, `F` — полный экран, `#5` в адресе — сразу на 5-й слайд. Печать в PDF: Ctrl+P (каждый слайд на отдельной странице).

## План (~30 мин)

| # | Блок | Ступенька | Время | Слайды |
|---|---|---|---|---|
| 0 | Лестница L1–L9, кто в зале где | — | 3 мин | 1–3 |
| 1 | **Race the City**: мир как данные, zero backend, релиз каждые 30 минут, boot-check, где ошибался агент, спека → план → код | L4 → L5 | 11 мин | 4–10 |
| 2 | Узкое место — я: треть коммитов ночью → **claude-remote-vm-dev**: tmux + worktree на VM, провайдеры, периметр | L5 → L6 | 5 мин | 11–13 |
| 3 | **itffm**: YAML вместо 3D-художника, параллельные субагенты, Opus планирует, Sonnet делает; что тесты не ловят | L6 → L7 | 7 мин | 14–17 |
| 4 | Сводная таблица, пять правил, L8–L9 и бэклог, вопросы | → L8 | 4 мин | 18–21 |

Две живые демки: Race the City (слайд 4) и itffm (слайд 14).

## Проекты

- https://race-the-city.games — [kryadov/race-the-city](https://github.com/kryadov/race-the-city)
- https://kryadov.github.io/itffm/ — [kryadov/itffm](https://github.com/kryadov/itffm)
- [kryadov/claude-remote-vm-dev](https://github.com/kryadov/claude-remote-vm-dev)

Текст анонса: [ANNOUNCE.md](ANNOUNCE.md).
