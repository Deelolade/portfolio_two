import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from 'react'

const Form = () => {
 const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 min-w-full ">
      <div className="max-w-sm mx-auto">
      <div className="mb-4">
        <Label htmlFor="name" className="text-gray-400" >Name</Label>
        <Input id="name" type="text" {...register("name")} />
      </div>
      <div className="mb-4">
        <Label htmlFor="email" className="text-gray-400" >Email</Label>
        <Input id="email" type="email" {...register("email")} />
      </div>
      <div className="mb-8">
        <Label htmlFor="message" className="text-gray-400">Your Message</Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          {...register("message", { required: true })}
        />
      </div>
      <Button type="submit" className="w-full">
        Login
      </Button>
      </div>
    </form>
  );
}
export default Form