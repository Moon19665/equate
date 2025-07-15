import Image from "next/image";

const cardData = [
  {
    title: "Reimburse locally in more places, including India.",
    desc: "Fund reimbursements in the local currency from a local bank account now in India and Israel.",
    img: "https://brand.brex.com/transform/0543b355-0042-4f14-b007-1d649045f3ee/spring25_Reimburse-locally-in-more-places-including-India?io=transform:fit,width:2000,height:1623&quality=95",
  },
  {
    title: "Local card billing in three more countries.",
    desc: "Transact and get billed in the local currency in South Africa, the UAE, and Israel.",
    img: "https://brand.brex.com/m/70d1f12b7d255948/webimage-spring25_Issue-local-cards-in-3-more-countries.jpg?io=transform:fit,width:2000,height:1623&quality=95",
  },
  {
    title: "Use autopay and global bill pay now in Australia.",
    desc: "Autopay your Brex statement and pay vendors via bill pay from Australian bank accounts.",
    img: "https://brand.brex.com/transform/eb97c0b0-68e1-4b24-b742-8e3f452c5c38/spring25_Use-autopay-and-global-bill-pay-now-in-Australia?io=transform:fit,width:2000,height:1623&quality=95",
  },
  {
    title: "Export reimbursements as bills in NetSuite and QuickBooks.",
    desc: "Now you can categorize employee reimbursements as vendor bills for easier reporting and compliance.",
    img: "https://brand.brex.com/m/5fd6ad6b0bd817d6/webimage-spring25_Export-reimbursements-as-bills-in-NetSuite-and-QBO.jpg?io=transform:fit,width:2000,height:1623&quality=95",
  },
  {
    title: "Accruals now supported for all ERP integrations.",
    desc: "Prepare and export transactions as accruals now in QuickBooks, Intacct, Oracle Fusion, and Workday.",
    img: "https://brand.brex.com/m/457b694352167977/webimage-spring25_Accruals-now-supported-in-more-ERPs.jpg?io=transform:fit,width:2000,height:1620&quality=95",
  },
  {
    title: "Simplify accounting with a more robust Xero integration.",
    desc: "Now Xero integration users can access new capabilities like exports, bank feeds, and bill pay.",
    img: "https://brand.brex.com/transform/59458035-95d3-406c-857f-0cd985f7ed98/spring25_Simplify-accounting-with-a-more-robust-Xero-integration?io=transform:fit,width:2000,height:1623&quality=95",
  },
  {
    title: "Connect any identity provider for single sign-on.",
    desc: "Connect any IdP such as Okta, Microsoft Entra ID, or Google SCIM to authenticate your team on Brex.",
    img: "https://brand.brex.com/transform/e86af6b8-c24b-4faf-8854-66f1481f7266/spring25_Connect-any-identity-provider-for-single-sign-on?io=transform:fit,width:2000,height:1623&quality=95",
  },
  {
    title: "Audit log for tracking all activity on every single Brex card.",
    desc: "Cardholders and admins can see all card actions like activation, locking, and PIN changes in one place.",
    img: "https://brand.brex.com/transform/72980552-2bbb-4046-9f10-8955feed24e3/spring25_Audit-logs-for-every-single-Brex-card?io=transform:fit,width:2000,height:1623&quality=95",
  },
  {
    title: "Approve bill payments in bulk to save time.",
    desc: "Now you can select multiple pending bill payments and approve them at once.",
    img: "https://brand.brex.com/transform/5e8a1f87-05b5-447b-b8f8-97faade6cb96/spring25_Approve-bill-payments-in-bulk-to-save-time?io=transform:fit,width:2000,height:1623&quality=95",
  },
  {
    title: "Unlock travel insights in new admin reports.",
    desc: "Analyze your travel program easily with simplified, consolidated travel data in new admin reports.",
    img: "https://brand.brex.com/m/6a9ae71e4d8753e9/webimage-spring25_Unlock-travel-insights-in-new-admin-reports.jpg?io=transform:fit,width:2000,height:1623&quality=95",
  },
  {
    title: "Create and manage cards in NetSuite.",
    desc: "Access Brex cards directly within NetSuite and automate vendor bill payments with virtual cards.",
    img: "https://brand.brex.com/transform/6af15d1c-8215-43f7-86e4-25daa04aef1a/spring25_Netsuite?io=transform:fit,width:2000,height:1623&quality=95",
  },
  {
    title: "Create smarter auto transfer rules between accounts.",
    desc: "Set up auto transfers for Checking and Treasury to ensure transactions go through effortlessly.",
    img: "https://brand.brex.com/transform/b5f9fcce-4315-4d02-bd56-9cd5cc5918c4/spring25_Smarter-auto-transfer-rules-between-accounts?io=transform:fit,width:2000,height:1623&quality=95",
  },
];

export default function SpringReleaseFeatures() {
  return (
    <>
    {/* <section className="px-4 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <p className="text-xs uppercase text-gray-500 tracking-widest">That’s Not All</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#111] mt-2 mb-4">
          And so much more.
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Over 50 more improvements to ensure your Brex account works as hard as you do.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
          >
            <div className="relative w-full h-48">
              <Image
                src={card.img}
                alt={card.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-[#111] mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section> */}
    </>
  );
}
