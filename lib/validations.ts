import * as z from "zod"

export const leadFormSchema = z.object({
    fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
    companyName: z.string().min(2, { message: "Company name must be at least 2 characters." }),
    designation: z.string().min(2, { message: "Designation is required." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    serviceInterested: z.string().min(1, { message: "Please select a service." }),
    location: z.string().min(2, { message: "Location is required." }),
})

export type LeadFormValues = z.infer<typeof leadFormSchema>
