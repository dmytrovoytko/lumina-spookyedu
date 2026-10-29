import test from 'node:test';
import assert from 'node:assert/strict';
import { computeEarnedTitle } from '../utils/titleGenerator';

test('computeEarnedTitle awards highest rank for high accuracy and streak in Día de los Muertos', () => {
  const result = computeEarnedTitle('dia_de_los_muertos', 95, 7, 1200);
  assert.equal(result.title, 'Guardián Supremo de Mictlán');
  assert.equal(result.rank, 'Legendary Chronicler');
  assert.ok(result.loreQuote.length > 0);
  assert.equal(result.realmBadge, '🏵️');
});

test('computeEarnedTitle awards mid-tier rank for moderate accuracy in Día de los Muertos', () => {
  const result = computeEarnedTitle('dia_de_los_muertos', 78, 4, 800);
  assert.equal(result.title, 'Maestro de la Ofrenda Sagrada');
  assert.equal(result.rank, 'Master Altarist');
});

test('computeEarnedTitle awards high rank for Halloween Science', () => {
  const result = computeEarnedTitle('halloween_science', 92, 8, 1400);
  assert.equal(result.title, 'Master of Light, Optics & Nocturnal Lore');
  assert.equal(result.rank, 'Grand Alchemical Investigator');
  assert.equal(result.sealColor, '#10B981');
});

test('computeEarnedTitle awards apprentice rank for low accuracy in Halloween Science', () => {
  const result = computeEarnedTitle('halloween_science', 40, 1, 200);
  assert.equal(result.title, 'Apprentice Cryptid Sleuth');
  assert.equal(result.rank, 'Lantern Bearer');
});

test('computeEarnedTitle awards Sovereign of Remembrance & Truth for Hybrid mastery', () => {
  const result = computeEarnedTitle('hybrid', 90, 6, 1500);
  assert.equal(result.title, 'Keeper of the Dual Gates');
  assert.equal(result.rank, 'Sovereign of Remembrance & Truth');
});

test('All returned title objects have complete fields', () => {
  const realms = ['dia_de_los_muertos', 'halloween_science', 'hybrid'] as const;
  const accuracies = [20, 55, 80, 95];

  for (const r of realms) {
    for (const acc of accuracies) {
      const res = computeEarnedTitle(r, acc, 3, 500);
      assert.ok(res.title && res.title.length > 0, 'Title must not be empty');
      assert.ok(res.rank && res.rank.length > 0, 'Rank must not be empty');
      assert.ok(res.realmBadge && res.realmBadge.length > 0, 'Badge must not be empty');
      assert.ok(res.sealColor && res.sealColor.startsWith('#'), 'Seal color must be a valid hex');
      assert.ok(res.loreQuote && res.loreQuote.length > 0, 'Quote must not be empty');
    }
  }
});
