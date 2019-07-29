export const conditions = [
  {
    text: "One lowercase character",
    testFn: v => /[a-z]/.test(v),
  },
  {
    text: "One uppercase character",
    testFn: v => /[A-Z]/.test(v),
  },
  { text: "One number", testFn: v => /\d/.test(v) },
  {
    text: "8 to 50 characters long",
    testFn: v => v.length >= 8 && v.length <= 50,
  },
]

export const isPasswordStrong = value =>
  conditions.map(x => x.testFn(value || "")).every(x => x)
