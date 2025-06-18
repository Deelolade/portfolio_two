import gsap from "gsap";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useEffect } from "react";
import { IoSendSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const Form = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const formData = {
      access_key: "300ee632-1677-46cd-a180-1e942e64734f",
      subject: "New Portfolio Message",
      ...data,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        // console.log("Success:", result);
        Swal.fire({
          title: "Message Sent!",
          text: "Thanks for reaching out. I’ll get back to you shortly ",
          // icon: "success",
        });
        reset();
      } else {
        // console.error("Web3Forms Error:", result);
      }
    } catch (error) {
      console.error("Submission Failed:", error);
    }
  };

  useEffect(() => {
    gsap.set(".form", { opacity: 0, scale: 0.9, filter: "blur(5px)" }); // set initial state
    gsap.to(".form", {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.4,
      ease: "power2.out",
    });
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" form space-y-4 min-w-full "
    >
      <div className="max-w-sm mx-auto">
        <div className="mb-6">
          <Label htmlFor="name" className="text-gray-400">
            Name
          </Label>
          <Input
            id="name"
            className="placeholder:text-sm"
            type="text"
            required
            placeholder="Who do I have the pleasure of chatting with?"
            {...register("name")}
          />
        </div>
        <div className="mb-6">
          <Label htmlFor="email" className="text-gray-400">
            Email
          </Label>
          <Input
            id="email"
            className="placeholder:text-sm"
            type="email"
            required
            placeholder="Drop your email so I can get back to you"
            {...register("email")}
          />
        </div>
        <div className="mb-8">
          <Label htmlFor="message" className="text-gray-400">
            Your Message
          </Label>
          <Textarea
            id="message"
            className="placeholder:text-sm"
            placeholder="Drop a message no idea is too big or small"
            {...register("message", { required: true })}
          />
        </div>
        <div className="flex justify-end">
          <Button type="submit" className="hover:bg-black bg-gray-700">
            Let’s Collaborate <IoSendSharp />
          </Button>
        </div>
      </div>
    </form>
  );
};
export default Form;
