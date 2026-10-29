import test from 'node:test';
import assert from 'node:assert/strict';
import { TRIVIA_BANK } from '../data/triviaBank';

test('TRIVIA_BANK contains exactly 60 curated questions', () => {
  assert.equal(TRIVIA_BANK.length, 60, `Expected 60 questions, got ${TRIVIA_BANK.length}`);
});

test('All question IDs are unique and non-empty', () => {
  const ids = new Set<string>();
  for (const q of TRIVIA_BANK) {
    assert.ok(q.id && q.id.trim().length > 0, 'Question ID must not be empty');
    assert.ok(!ids.has(q.id), `Duplicate question ID detected: ${q.id}`);
    ids.add(q.id);
  }
});

test('All questions have valid realms, difficulties, and formats', () => {
  const validRealms = ['dia_de_los_muertos', 'halloween_science', 'hybrid'];
  const validDifficulties = ['light', 'dark', 'spooky'];
  const validFormats = ['multiple_choice', 'myth_vs_fact'];

  for (const q of TRIVIA_BANK) {
    assert.ok(validRealms.includes(q.realm), `Invalid realm: ${q.realm} in question ${q.id}`);
    assert.ok(validDifficulties.includes(q.difficulty), `Invalid difficulty: ${q.difficulty} in question ${q.id}`);
    assert.ok(validFormats.includes(q.format), `Invalid format: ${q.format} in question ${q.id}`);
    assert.ok(q.category.trim().length > 0, `Category must not be empty in question ${q.id}`);
    assert.ok(q.explanation.trim().length > 0, `Explanation must not be empty in question ${q.id}`);
  }
});

test('Multiple-choice questions have exactly 4 options and valid answer inclusion', () => {
  const mcQuestions = TRIVIA_BANK.filter((q) => q.format === 'multiple_choice');
  assert.ok(mcQuestions.length > 0, 'Expected multiple-choice questions');

  for (const q of mcQuestions) {
    assert.ok(Array.isArray(q.options), `Expected options array in question ${q.id}`);
    assert.equal(q.options!.length, 4, `Question ${q.id} must have exactly 4 options`);
    assert.ok(
      typeof q.correctAnswer === 'string',
      `Question ${q.id} multiple-choice correctAnswer must be a string`
    );
    assert.ok(
      q.options!.includes(q.correctAnswer as string),
      `Question ${q.id} correctAnswer "${q.correctAnswer}" is not present in options`
    );
  }
});

test('Myth vs Fact questions have boolean correct answers', () => {
  const mfQuestions = TRIVIA_BANK.filter((q) => q.format === 'myth_vs_fact');
  assert.ok(mfQuestions.length > 0, 'Expected myth_vs_fact questions');

  for (const q of mfQuestions) {
    assert.equal(
      typeof q.correctAnswer,
      'boolean',
      `Question ${q.id} myth_vs_fact correctAnswer must be boolean (true for fact, false for myth)`
    );
  }
});

test('Question distribution across realms is balanced', () => {
  const dlm = TRIVIA_BANK.filter((q) => q.realm === 'dia_de_los_muertos').length;
  const hw = TRIVIA_BANK.filter((q) => q.realm === 'halloween_science').length;
  const hyb = TRIVIA_BANK.filter((q) => q.realm === 'hybrid').length;

  assert.equal(dlm, 26, 'Expected 26 Día de los Muertos questions');
  assert.equal(hw, 26, 'Expected 26 Halloween Science questions');
  assert.equal(hyb, 8, 'Expected 8 Hybrid questions');
});
