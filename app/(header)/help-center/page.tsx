import { AccordionTrigger } from "@/components/ui/accordion"
import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from "@radix-ui/react-accordion"

const helpCenterContent = [
    {
        question: 'How do I place an order?',
        answer: 'To place an order, browse our catalog, select the items you want, and add them to your cart. Once you’re ready, proceed to checkout, fill in your shipping information, and make the payment.',
        item: 'item-1'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other secure payment options.',
        item: 'item-2'
    },
    {
        question: 'How long will it take to receive my order?',
        answer: 'Standard shipping usually takes 5-7 business days. Expedited shipping options are available at checkout.',
        item: 'item-3'
    },
    {
        question: 'Can I track my order?',
        answer: "Yes, once your order is shipped, you will receive a tracking number and a phone number via email to monitor your package's progress.",
        item: 'item-4'
    }

// Q: Do you offer international shipping?
// A: Currently, we ship only within the United States. We are working on expanding our shipping options.

// 2. Returns and Exchanges
// Q: What is your return policy?
// A: We offer a 30-day return policy on most items. Products must be unused and in their original packaging. Customized items are non-returnable.

// Q: How do I initiate a return?
// A: To initiate a return, contact our customer service at returns@blissfulbathware.com. We will provide you with a return authorization and instructions.

// Q: Can I exchange an item?
// A: Yes, exchanges are possible within 30 days of purchase. Contact our customer service for assistance.

// Q: What if my item is damaged or defective?
// A: If you receive a damaged or defective item, please contact us immediately at support@blissfulbathware.com. We will arrange a replacement or refund.

// 3. Product Information
// Q: What materials are your products made from?
// A: Our bathware products are made from high-quality materials like ceramic, porcelain, and eco-friendly resins.

// Q: How do I care for my bathware?
// A: Each product comes with specific care instructions. Generally, handwashing with mild detergent is recommended to maintain the quality.

// Q: Can I customize my bathware?
// A: Yes, we offer customization on select products. Please visit our customization page for more details.

// 4. Account and Privacy
// Q: How do I create an account?
// A: Click on the "Sign Up" button at the top right corner of our homepage and follow the prompts to create an account.

// Q: How do I reset my password?
// A: If you forgot your password, click on "Forgot Password" at the login page, and we will send a reset link to your email.

// Q: How is my personal information protected?
// A: We use advanced encryption methods and secure servers to protect your personal information. Please refer to our Privacy Policy for more details.

// 5. Contact Us
// Q: How can I reach customer service?
// A: You can contact us via email at support@blissfulbathware.com or call us at (123) 456-7890. Our customer service hours are Monday to Friday, 9 AM - 5 PM EST.

// Q: Do you have a physical store?
// A: Currently, we operate online only. However, we plan to open physical locations in the future.
]

const page = () => {
  return (
    <div>
      <div className='container pt-6'>
        <h2 className='font-medium text-2xl pb-4'>Help Center</h2>
        <Accordion type='single' collapsible>
            {helpCenterContent.map((content, index) => (
                <AccordionItem value={content.item} key={index}>
                    <AccordionTrigger>
                        Q: {content.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500">
                        A: {content.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  )
}

export default page
