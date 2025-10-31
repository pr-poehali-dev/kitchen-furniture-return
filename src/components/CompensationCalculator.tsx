import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

interface CalculatorProps {
  onClose?: () => void;
}

const CompensationCalculator = ({ onClose }: CalculatorProps) => {
  const [step, setStep] = useState(1);
  const [kitchenPrice, setKitchenPrice] = useState("");
  const [usagePeriod, setUsagePeriod] = useState("less6");
  const [defects, setDefects] = useState<string[]>([]);
  const [compensation, setCompensation] = useState(0);

  const defectOptions = [
    { id: "facades", label: "Дефекты фасадов", multiplier: 0.3 },
    { id: "countertop", label: "Проблемы со столешницей", multiplier: 0.25 },
    { id: "hardware", label: "Неисправная фурнитура", multiplier: 0.15 },
    { id: "assembly", label: "Брак сборки", multiplier: 0.2 },
    { id: "materials", label: "Некачественные материалы", multiplier: 0.35 }
  ];

  const calculateCompensation = () => {
    const price = parseFloat(kitchenPrice);
    if (!price || defects.length === 0) return;

    let baseCompensation = price;
    
    const periodMultipliers: Record<string, number> = {
      "less6": 1.0,
      "6to12": 0.85,
      "12to24": 0.7,
      "more24": 0.5
    };

    baseCompensation *= periodMultipliers[usagePeriod] || 1.0;

    const defectMultiplier = defects.reduce((sum, defectId) => {
      const defect = defectOptions.find(d => d.id === defectId);
      return sum + (defect?.multiplier || 0);
    }, 0);

    const totalCompensation = Math.min(baseCompensation * (1 + defectMultiplier), price * 1.5);
    
    const moralDamage = Math.min(price * 0.1, 50000);

    setCompensation(Math.round(totalCompensation + moralDamage));
    setStep(3);
  };

  const toggleDefect = (defectId: string) => {
    setDefects(prev => 
      prev.includes(defectId) 
        ? prev.filter(id => id !== defectId)
        : [...prev, defectId]
    );
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('ru-RU').format(value);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto animate-scale-in">
      <CardHeader className="border-b">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="font-heading text-2xl flex items-center gap-2">
              <Icon name="Calculator" size={28} className="text-primary" />
              Калькулятор компенсации
            </CardTitle>
            <CardDescription className="mt-2">
              Узнайте примерную сумму возврата за бракованную кухню
            </CardDescription>
          </div>
          {onClose && (
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={24} />
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        {step === 1 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <Label htmlFor="price" className="text-base font-semibold mb-2 block">
                Стоимость кухонного гарнитура (₽)
              </Label>
              <Input
                id="price"
                type="number"
                placeholder="350 000"
                value={kitchenPrice}
                onChange={(e) => setKitchenPrice(e.target.value)}
                className="text-lg"
              />
              <p className="text-sm text-muted-foreground mt-2">
                Укажите полную стоимость кухни по договору
              </p>
            </div>

            <div>
              <Label className="text-base font-semibold mb-3 block">
                Срок эксплуатации
              </Label>
              <RadioGroup value={usagePeriod} onValueChange={setUsagePeriod}>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="less6" id="less6" />
                  <Label htmlFor="less6" className="cursor-pointer flex-1">Менее 6 месяцев</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="6to12" id="6to12" />
                  <Label htmlFor="6to12" className="cursor-pointer flex-1">От 6 до 12 месяцев</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="12to24" id="12to24" />
                  <Label htmlFor="12to24" className="cursor-pointer flex-1">От 1 до 2 лет</Label>
                </div>
                <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value="more24" id="more24" />
                  <Label htmlFor="more24" className="cursor-pointer flex-1">Более 2 лет</Label>
                </div>
              </RadioGroup>
            </div>

            <Button 
              onClick={() => setStep(2)} 
              className="w-full" 
              size="lg"
              disabled={!kitchenPrice}
            >
              Далее
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-fade-in">
            <div>
              <Label className="text-base font-semibold mb-3 block">
                Выявленные дефекты
              </Label>
              <p className="text-sm text-muted-foreground mb-4">
                Выберите все проблемы, с которыми столкнулись
              </p>
              <div className="space-y-3">
                {defectOptions.map((defect) => (
                  <div 
                    key={defect.id}
                    className="flex items-center space-x-3 p-4 rounded-lg border-2 hover:border-primary/50 transition-colors cursor-pointer"
                    onClick={() => toggleDefect(defect.id)}
                  >
                    <Checkbox
                      id={defect.id}
                      checked={defects.includes(defect.id)}
                      onCheckedChange={() => toggleDefect(defect.id)}
                    />
                    <Label htmlFor={defect.id} className="cursor-pointer flex-1 font-medium">
                      {defect.label}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={() => setStep(1)} 
                variant="outline"
                className="flex-1"
                size="lg"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад
              </Button>
              <Button 
                onClick={calculateCompensation}
                className="flex-1"
                size="lg"
                disabled={defects.length === 0}
              >
                Рассчитать
                <Icon name="Calculator" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 text-center">
              <div className="mb-4">
                <Icon name="CircleCheck" size={64} className="text-primary mx-auto" />
              </div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                Примерная компенсация
              </h3>
              <div className="text-5xl font-heading font-bold text-primary mb-2">
                {formatPrice(compensation)} ₽
              </div>
              <p className="text-sm text-muted-foreground">
                С учётом морального вреда и расходов на экспертизу
              </p>
            </div>

            <Card className="bg-muted/30 border-none">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    <p className="font-semibold text-foreground mb-1">Важно знать:</p>
                    <ul className="space-y-1 list-disc list-inside">
                      <li>Это предварительная оценка для ориентира</li>
                      <li>Точная сумма определяется после экспертизы</li>
                      <li>В 98% случаев мы добиваемся полного возврата средств</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              <Button className="w-full" size="lg" variant="default">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить бесплатную консультацию
              </Button>
              <Button 
                onClick={() => {
                  setStep(1);
                  setKitchenPrice("");
                  setDefects([]);
                  setCompensation(0);
                }}
                variant="outline"
                className="w-full"
                size="lg"
              >
                <Icon name="RotateCcw" size={20} className="mr-2" />
                Рассчитать ещё раз
              </Button>
            </div>
          </div>
        )}
      </CardContent>

      <div className="px-6 pb-4">
        <div className="flex justify-center gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-2 rounded-full transition-all ${
                s === step 
                  ? 'w-8 bg-primary' 
                  : s < step 
                    ? 'w-2 bg-primary/50'
                    : 'w-2 bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CompensationCalculator;
