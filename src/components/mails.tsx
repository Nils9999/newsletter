import { Card, CardContent, Separator, Input } from "./ui";
import { useState } from "react";

// Typen für E-Mail-Daten

// Emails vom Server abrufen

// Email speichern

export const Mails = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <Card className="p-4">
      <CardContent>
        <h2 className="text-2xl font-bold mb-4 text-white">Email List</h2>
        <Separator className="mb-4" />

        <Input
          type="email"
          placeholder="Add Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="my-4 text-white"
        />
        {/* <Button onClick={} className="bg-blue-500 text-white">
          Save Email
        </Button> */}
      </CardContent>
    </Card>
  );
};
