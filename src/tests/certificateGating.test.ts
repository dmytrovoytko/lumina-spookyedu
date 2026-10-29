import test from 'node:test';
import assert from 'node:assert/strict';

interface MockGameSession {
  totalAnswered: number;
  correctAnswers: number;
  accuracy: number;
}

function checkCertificateEligibility(session: MockGameSession): boolean {
  return session.accuracy >= 50 && session.correctAnswers > 0;
}

test('Fails certificate threshold when accuracy is below 50%', () => {
  const session: MockGameSession = {
    totalAnswered: 10,
    correctAnswers: 4,
    accuracy: 40
  };
  assert.equal(checkCertificateEligibility(session), false, '40% accuracy should not qualify');
});

test('Fails certificate threshold when 0 answers are correct regardless of total', () => {
  const sessionZero: MockGameSession = {
    totalAnswered: 0,
    correctAnswers: 0,
    accuracy: 0
  };
  assert.equal(checkCertificateEligibility(sessionZero), false, '0 correct should not qualify');
});

test('Qualifies for certificate exactly at 50% accuracy with at least 1 correct', () => {
  const session50: MockGameSession = {
    totalAnswered: 2,
    correctAnswers: 1,
    accuracy: 50
  };
  assert.equal(checkCertificateEligibility(session50), true, '50% accuracy with 1 correct should qualify');
});

test('Qualifies for certificate above 50% accuracy', () => {
  const sessionHigh: MockGameSession = {
    totalAnswered: 8,
    correctAnswers: 7,
    accuracy: 88
  };
  assert.equal(checkCertificateEligibility(sessionHigh), true, '88% accuracy should qualify');
});
