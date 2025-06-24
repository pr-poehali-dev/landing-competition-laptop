import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

const formSchema = z.object({
  fullName: z.string().min(2, "ФИО должно содержать минимум 2 символа"),
  email: z.string().email("Введите корректный email"),
  phone: z.string().min(10, "Введите корректный номер телефона"),
  clinic: z
    .string()
    .min(2, "Название клиники должно содержать минимум 2 символа"),
});

type FormData = z.infer<typeof formSchema>;

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Имитация отправки формы
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Регистрация успешно отправлена!", {
      description: "Мы свяжемся с вами в ближайшее время",
    });

    reset();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navigation />

      <div className="max-w-2xl mx-auto px-4 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="font-montserrat font-bold text-4xl mb-4">
            Регистрация в <span className="text-primary">конкурсе</span>
          </h1>
          <p className="text-xl text-gray-600">
            Заполните форму для участия в конкурсе
          </p>
        </div>

        <Card className="p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-base font-medium">
                ФИО *
              </Label>
              <Input
                id="fullName"
                {...register("fullName")}
                placeholder="Введите ваше полное имя"
                className="text-base py-3"
              />
              {errors.fullName && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-base font-medium">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="example@clinic.ru"
                className="text-base py-3"
              />
              {errors.email && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-medium">
                Номер телефона *
              </Label>
              <Input
                id="phone"
                type="tel"
                {...register("phone")}
                placeholder="+7 (999) 123-45-67"
                className="text-base py-3"
              />
              {errors.phone && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="clinic" className="text-base font-medium">
                Название клиники *
              </Label>
              <Input
                id="clinic"
                {...register("clinic")}
                placeholder="ООО Медицинский центр"
                className="text-base py-3"
              />
              {errors.clinic && (
                <p className="text-sm text-destructive flex items-center gap-1">
                  <Icon name="AlertCircle" size={14} />
                  {errors.clinic.message}
                </p>
              )}
            </div>

            <div className="bg-primary/5 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} className="text-primary mt-0.5" />
                <div className="text-sm text-gray-700">
                  <p className="font-medium mb-1">Условия участия:</p>
                  <p>
                    Регистрируясь, вы соглашаетесь направить 300 пациентов на
                    CBCT диагностику для участия в конкурсе на ноутбук от
                    Picasso.
                  </p>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Icon
                    name="Loader2"
                    size={20}
                    className="mr-2 animate-spin"
                  />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" size={20} className="mr-2" />
                  Зарегистрироваться
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
