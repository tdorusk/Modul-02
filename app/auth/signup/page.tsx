"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, EyeIcon, EyeOffIcon, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import  useSignUp from "@/hooks/auth/useSignUp";
import { 
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";


    const formSchema = z
.object({
    name: z.string().min(1).max(50),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

type SignUpFormValues = z.infer<typeof formSchema>; 

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showComfirmPassword, setShowComfirmPassword] = useState(false);

    const { isLoading, signUp } = useSignUp(); 
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    async function onSubmit(value: SignUpFormValues) {
        const response = await signUp({
            name: value.name,
            email: value.email,
            password: value.password,
        });

        console.log(response)

        form.reset();
        toast.success("Account created successfully!");
    }

    return (
        <div className="flex flex-col gap-4">
            <Link href="/" className="text-sm text-gray-600 hover:text-brand-800 transition-colors flex col-center">
             <ArrowLeftIcon className="w-4 h-4 mr-2"/>
             Back to home
            </Link>

            <Card className="shadow-lg border-0">
                <CardHeader className="text-center space-y-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-brand-700 rounded-lg mx-auto mb-2"></div>
                    <CardTitle className="text-2xl font-bold">
                            Create your account
                    </CardTitle>
                </CardHeader>

                <CardContent>
                    <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your name" {...field} />
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
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl> 
                                    <div className="relative">
                                        <Input placeholder="Enter your password" 
                                        {...field} 
                                        type={showPassword ? "text" : "password"}
                                        />
                                        <Button 
                                        variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2" 
                                        onClick={() => setShowPassword(!showPassword)}
                                        >
                                        {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input placeholder="Confirm your password" 
                                        {...field} 
                                        type={showComfirmPassword ? "text" : "password"}
                                        />
                                        <Button 
                                        variant="ghost" size="icon" className="absolute right-2 top-1/2 -translate-y-1/2" 
                                        onClick={() => setShowComfirmPassword(!showComfirmPassword)}
                                        >
                                            {showComfirmPassword ? <EyeIcon /> : <EyeOffIcon />}
                                        </Button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full">
                        { isLoading ? (
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />) : ("Submit") }
                    </Button>
                    </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
};

export default SignUpPage;