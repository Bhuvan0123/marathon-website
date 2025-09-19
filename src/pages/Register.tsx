"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// ✅ Validation schema
const formSchema = z.object({
  fullName: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  dob: z.string().nonempty("Date of Birth is required"),
  gender: z.string().nonempty("Select gender"),
  nationality: z.string().min(2, "Enter nationality"),
  address: z.string().min(5, "Enter full address"),
  pincode: z.string().regex(/^[0-9]{5,6}$/, "Enter valid pincode"),
  category: z.enum(["men", "women_children"], {
    message: "Select category",
  }),
  tshirt: z.enum(["S", "M", "L", "XL", "XXL"], {
    message: "Select T-shirt size",
  }),
  emergencyName: z.string().min(3, "Enter contact name"),
  emergencyRelation: z.string().min(2, "Enter relation"),
  emergencyPhone: z.string().regex(/^[0-9]{10}$/, "Phone must be 10 digits"),
  aadhar: z.string().regex(/^[0-9]{12}$/, "Aadhar must be 12 digits"),
  blood: z.string().nonempty("Select blood group"),
  experience: z.string().nonempty("Select experience level"),
});

export default function MarathonRegisterForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      nationality: "",
      address: "",
      pincode: "",
      category: undefined,
      tshirt: undefined,
      emergencyName: "",
      emergencyRelation: "",
      emergencyPhone: "",
      aadhar: "",
      blood: "",
      experience: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxp8zfrBd44AA5lmV6OOh_UFbiFoRHvEgcoI0su-o14ljwjlwbf1yydZvxHshKqSHxd/exec", // <-- Replace with your Apps Script Web App URL
        {
          method: "POST",
          mode: "no-cors", // Important for Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            FullName: values.fullName,
            Email: values.email,
            Phone: values.phone,
            DOB: values.dob,
            Gender: values.gender,
            Nationality: values.nationality,
            Address: values.address,
            Pincode: values.pincode,
            Category: values.category,
            Tshirt: values.tshirt,
            EmergencyContactName: values.emergencyName,
            EmergencyContactRelation: values.emergencyRelation,
            EmergencyContactNumber: values.emergencyPhone,
            AadharNumber: values.aadhar,
            BloodGroup: values.blood,
            Experience: values.experience,
          }),
        }
        );

        // Since Apps Script with `no-cors` won’t return JSON reliably
        alert("✅ Registration Successful! We've received your details.");
        form.reset(); // reset the form after submission
      } catch (error) {
        console.error("❌ Error submitting form:", error);
        alert("⚠️ Something went wrong. Please try again.");
      }
    }



  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-orange-600">
        Marathon Registration
      </h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Full Name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="9876543210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* DOB */}
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Gender */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Nationality */}
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality</FormLabel>
                <FormControl>
                  <Input placeholder="Indian" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Street, City, State" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Pincode */}
          <FormField
            control={form.control}
            name="pincode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pincode</FormLabel>
                <FormControl>
                  <Input placeholder="600001" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Category */}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Race Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="men">Men</SelectItem>
                      <SelectItem value="women_children">Women & Children (10-15)</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* T-shirt Size */}
          <FormField
            control={form.control}
            name="tshirt"
            render={({ field }) => (
              <FormItem>
                <FormLabel>T-shirt Size</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL">XL</SelectItem>
                      <SelectItem value="XXL">XXL</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Emergency Name */}
          <FormField
            control={form.control}
            name="emergencyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Emergency Contact Name</FormLabel>
                <FormControl>
                  <Input placeholder="Parent/Guardian Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Emergency Relation */}
          <FormField
            control={form.control}
            name="emergencyRelation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Emergency Contact Relation</FormLabel>
                <FormControl>
                  <Input placeholder="Father / Mother / Friend" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Emergency Phone */}
          <FormField
            control={form.control}
            name="emergencyPhone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Emergency Phone</FormLabel>
                <FormControl>
                  <Input placeholder="9876543210" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Aadhar */}
          <FormField
            control={form.control}
            name="aadhar"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Aadhar Number</FormLabel>
                <FormControl>
                  <Input placeholder="123412341234" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Blood Group */}
          <FormField
            control={form.control}
            name="blood"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Blood Group</FormLabel>
                <FormControl>
                  <Input placeholder="O+, B-, AB+" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Experience */}
          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Running Experience</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <Button
            type="submit"
            disabled={!form.formState.isValid}
            onClick={form.handleSubmit(onSubmit)}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Register Now
          </Button>
        </div>
      </Form>
    </div>
  );
}
