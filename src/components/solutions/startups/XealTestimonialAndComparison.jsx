export default function XealTestimonialAndComparison() {
  return (
    <div className="w-full bg-white">
      {/* Testimonial Section */}
      <section className="w-full max-w-4xl mx-auto py-16 px-4 flex flex-col items-center text-center">
        {/* Xeal Logo */}
        <img
          src="/assets/startups/Xeal-Logo.webp"
          alt="Xeal Logo"
          className="h-10 md:h-12 mb-8"
          style={{ objectFit: "contain" }}
        />
        {/* Quote */}
        <blockquote className="max-w-3xl mx-auto">
          <p className="text-lg md:text-3xl font-serif text-gray-900 leading-snug md:leading-normal mb-8">
            “We chose Brex over Ramp and Navan because we wanted a tool that
            fostered a culture of accountability and ownership. Brex lets our
            employees make an informed decision whenever they use their card.”
          </p>
          <footer className="text-gray-500 text-xs md:text-lg">
            —{" "}
            <a
              href="#"
              className="underline hover:text-gray-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Justin Wade
            </a>
            , Director of Finance, Xeal
          </footer>
        </blockquote>
      </section>

      {/* Comparison Table Section */}
      <section className="w-full max-w-[1920px] mx-auto py-16 px-3 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
          Everything you'll need as you scale.
        </h2>
        <p className="text-gray-600 text-base md:text-lg text-center mb-10">
          Don’t waste time assembling disparate tools or switching providers
          every round.
          <br />
          Get one unified stack you’ll never outgrow.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="text-left font-semibold text-gray-900 py-4 px-6 bg-white"></th>
                <th className="text-center font-semibold text-gray-900 py-4 px-6 bg-white">
                  Brex
                </th>
                <th className="text-center font-semibold text-gray-900 py-4 px-6 bg-white">
                  Ramp
                </th>
                <th className="text-center font-semibold text-gray-900 py-4 px-6 bg-white">
                  Mercury
                </th>
                <th className="text-center font-semibold text-gray-900 py-4 px-6 bg-white">
                  J.P. Morgan
                </th>
              </tr>
            </thead>
            <tbody className="text-base">
              {[
                {
                  label: "Banking",
                  brex: true,
                  brexShowTick: true, // Hide tick for Brex
                  ramp: false,
                  rampShowTick: false,
                  mercury: false,
                  mercuryShowTick: true,
                  jpm: false,
                  jpmShowTick: true,
                },
                {
                  label: "Treasury",
                  brex: true,
                  brexShowTick: true,
                  ramp: false,
                  rampShowTick: false,
                  mercury: false,
                  mercuryShowTick: true,
                  jpm: false,
                  jpmShowTick: true,
                },
                {
                  label: "Cards",
                  brex: true,
                  brexShowTick: true,
                  ramp: false,
                  rampShowTick: true,
                  mercury: false,
                  mercuryShowTick: true,
                  jpm: false,
                  jpmShowTick: true,
                },
                {
                  label: "Reimbursements",
                  brex: true,
                  brexShowTick: true,
                  ramp: false,
                  rampShowTick: true,
                  mercury: false,
                  mercuryShowTick: false,
                  jpm: false,
                  jpmShowTick: false,
                },
                {
                  label: "Bill pay",
                  brex: true,
                  brexShowTick: true,
                  ramp: false,
                  rampShowTick: true,
                  mercury: false,
                  mercuryShowTick: true,
                  jpm: false,
                  jpmShowTick: true,
                },
                {
                  label: "Expense management",
                  brex: true,
                  brexShowTick: true,
                  ramp: false,
                  rampShowTick: true,
                  mercury: false,
                  mercuryShowTick: false,
                  jpm: false,
                  jpmShowTick: false,
                },
                {
                  label: "Travel",
                  brex: true,
                  brexShowTick: true,
                  ramp: false,
                  rampShowTick: false,
                  mercury: false,
                  mercuryShowTick: false,
                  jpm: false,
                  jpmShowTick: true,
                },
              ].map((row, idx) => (
                <tr
                  key={row.label}
                  className={idx % 2 === 0 ? "bg-[#f7f7fb]" : "bg-white"}
                >
                  <td className="py-4 px-6 font-medium text-gray-900">
                    {row.label}
                  </td>
                  {/* Brex */}
                  <td className="py-4 px-6">
                    <div className="flex justify-center items-center">
                      {row.brexShowTick ? (
                        row.brex ? (
                          <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                        )
                      ) : null}
                    </div>
                  </td>
                  {/* Ramp */}
                  <td className="py-4 px-6">
                    <div className="flex justify-center items-center">
                      {row.rampShowTick ? (
                        row.ramp ? (
                          <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                        )
                      ) : null}
                    </div>
                  </td>
                  {/* Mercury */}
                  <td className="py-4 px-6">
                    <div className="flex justify-center items-center">
                      {row.mercuryShowTick ? (
                        row.mercury ? (
                          <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                        )
                      ) : null}
                    </div>
                  </td>
                  {/* J.P. Morgan */}
                  <td className="py-4 px-6">
                    <div className="flex justify-center items-center">
                      {row.jpmShowTick ? (
                        row.jpm ? (
                          <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                        ) : (
                          <span className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                            <svg
                              className="w-4 h-4 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                        )
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
