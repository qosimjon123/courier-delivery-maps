
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Package, User, Phone, ChevronDown, ChevronUp } from "lucide-react";

interface OrderProps {
  id: string;
  customer: string;
  address: string;
  time: string;
  items: string[];
  phone: string;
  status: 'ожидание' | 'в пути' | 'доставлен';
}

const CurrentOrderCard: React.FC<OrderProps> = ({ id, customer, address, time, items, phone, status }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className="w-full shadow-lg border-purple-100">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold">Заказ #{id}</CardTitle>
          <Badge variant={status === 'ожидание' ? 'outline' : status === 'в пути' ? 'default' : 'secondary'}>
            {status}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pb-2">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{customer}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{address}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{time}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{phone}</span>
          </div>
        </div>
        
        {expanded && (
          <div className="mt-4 space-y-2">
            <div className="text-sm font-medium">Состав заказа:</div>
            <ul className="space-y-1">
              {items.map((item, index) => (
                <li key={index} className="text-sm flex items-center gap-2">
                  <Package className="h-3 w-3 text-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-0">
        <Button 
          variant="ghost" 
          size="sm" 
          className="w-full flex items-center justify-center text-purple-600" 
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <ChevronUp className="mr-1 h-4 w-4" /> Скрыть детали
            </>
          ) : (
            <>
              <ChevronDown className="mr-1 h-4 w-4" /> Показать детали
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CurrentOrderCard;
