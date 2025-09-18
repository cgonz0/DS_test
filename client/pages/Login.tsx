import { Banner } from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 dark:from-gray-900 dark:via-gray-900 dark:to-violet-950">
      <div className="mx-auto max-w-3xl px-4 py-6">
        <Banner
          variant="deepPurple"
          title="Welcome back"
          description="Please sign in to continue. For demo purposes, any email and password will do."
          onClose={() => {}}
        />
      </div>

      <main className="mx-auto grid min-h-[70vh] max-w-6xl place-items-center px-4 pb-16">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Sign in</CardTitle>
            <CardDescription>Access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Signed in");
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox id="remember" />
                  <span>Remember me</span>
                </label>
                <a
                  href="#"
                  className="text-sm font-semibold text-[var(--sk-alias-texttitle)] hover:underline"
                >
                  Forgot password?
                </a>
              </div>

              <Button
                type="submit"
                variant="solid"
                size="large"
                width="responsive"
                className="w-full"
              >
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
