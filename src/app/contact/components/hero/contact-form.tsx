"use client"

import Image from "next/image"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

const FormSchema = z.object({
  fullname: z.string().min(2, {
    message: "Fullname must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  budget: z.string(),
  project: z.string().min(5, { message: "Project description must be at least 5 characters." }),
})



export function ContactForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      budget: "$50k - $100k",
    },
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className="w-full flex flex-col items-center gap-16 mt-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} data-aos="fade-up" className="w-full sm:px-4 space-y-6">
          <FormField
            control={form.control}
            name="fullname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What’s your full name?</FormLabel>
                <FormControl>
                  <Input {...field} className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-foreground" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What’s your email address?</FormLabel>
                <FormControl>
                  <Input {...field} className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-foreground" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What’s your budget?</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="border-t-0 border-x-0 rounded-none focus:ring-0 focus-visible:ring-0 focus:border-foreground focus-visible:border-foreground">
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="$50k - $100k">$50k - $100k</SelectItem>
                    <SelectItem value="$100k - $150k">$100k - $150k</SelectItem>
                    <SelectItem value="$150k - $400k">$150k - $400k</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="project"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tell us about your project</FormLabel>
                <FormControl>
                  <Textarea {...field} className="border-t-0 border-x-0 rounded-none focus-visible:ring-0 focus-visible:border-foreground" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Image src='/about/team/mitchell-opatowsky.png' width={100} height={100} alt='Mitchell Opatowsky' data-aos="fade-right" className="rounded-full p-2 ring ring-primary" />
          <h3 data-aos="fade-left" className="text-xl max-w-xs text-center sm:text-left">Or arrange a call with Mitchell, our Lead of Business Development.</h3>
        </div>
        <div data-aos="fade-in" className="flex justify-center">
          <Button variant='outline'>Book a time</Button>
        </div>
      </div>
    </div>
  )
}