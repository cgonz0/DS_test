import { Button } from "@/components/ui/button";
import { Banner } from "@/components/ui/banner";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Chip } from "@/components/ui/chip";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 dark:from-gray-900 dark:via-gray-900 dark:to-violet-950">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-fuchsia-400/30 blur-3xl dark:bg-fuchsia-600/20" />
      <div className="pointer-events-none absolute -bottom-28 -right-28 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl dark:bg-indigo-600/20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-700/20" />

      <main className="relative z-10 mx-auto min-h-screen max-w-6xl px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-7xl">
            Hello, world!
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl">
            A tiny, modern and production‑ready hello world app with a beautiful
            button component.
          </p>
          <div className="mt-8">
            <Button asChild variant="solid">
              <Link to="/smart-home">View Smart Home Mobile Interface</Link>
            </Button>
          </div>
        </div>

        {/* Token Boxes */}
        <section aria-label="Design token boxes" className="mb-12">
          <div className="mx-auto w-full max-w-md rounded-xl border border-[var(--sk-alias-border)] bg-white/70 p-4 shadow-sm backdrop-blur dark:bg-gray-900/60">
            <div className="flex items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <div
                  className="h-[50px] w-[50px] rounded-md border border-[var(--sk-alias-border)]"
                  style={{ background: "var(--sk-color-gray600)" }}
                />
                <span className="text-xs text-[var(--sk-alias-textlabel)]">
                  gray600
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div
                  className="h-[50px] w-[50px] rounded-md border border-[var(--sk-alias-border)]"
                  style={{ background: "var(--sk-color-turquoise500)" }}
                />
                <span className="text-xs text-[var(--sk-alias-textlabel)]">
                  turquoise500
                </span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div
                  className="h-[50px] w-[50px] rounded-md border border-[var(--sk-alias-border)]"
                  style={{ background: "var(--sk-alias-primary)" }}
                />
                <span className="text-xs text-[var(--sk-alias-textlabel)]">
                  primary
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Button Showcase */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Button Component Showcase
            </h2>

            {/* Solid Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Solid Style</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="solid" size="large">
                  Button
                </Button>
                <Button variant="solid" size="small">
                  Button
                </Button>
                <Button variant="solid" size="xsmall">
                  Button
                </Button>
                <Button variant="solid" size="large" disabled>
                  Button
                </Button>
              </div>
            </div>

            {/* Muted Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Muted Style</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="muted" size="large">
                  Button
                </Button>
                <Button variant="muted" size="small">
                  Button
                </Button>
                <Button variant="muted" size="xsmall">
                  Button
                </Button>
                <Button variant="muted" size="large" disabled>
                  Button
                </Button>
              </div>
            </div>

            {/* Outline Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Outline Style</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="outline" size="large">
                  Button
                </Button>
                <Button variant="outline" size="small">
                  Button
                </Button>
                <Button variant="outline" size="xsmall">
                  Button
                </Button>
                <Button variant="outline" size="large" disabled>
                  Button
                </Button>
              </div>
            </div>

            {/* Plain Buttons */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Plain Style</h3>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="plain" size="large">
                  Button
                </Button>
                <Button variant="plain" size="small">
                  Button
                </Button>
                <Button variant="plain" size="xsmall">
                  Button
                </Button>
                <Button variant="plain" size="large" disabled>
                  Button
                </Button>
              </div>
            </div>

            {/* Width Variants */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Width Variants</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Responsive Width (default)
                  </p>
                  <Button variant="solid" size="large" width="responsive">
                    Responsive Button
                  </Button>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Fixed Width
                  </p>
                  <Button variant="solid" size="large" width="fixed">
                    Fixed Button
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Banner Showcase */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Banner Component Showcase
            </h2>

            {/* Different Variants */}
            <div className="space-y-6">
              {/* Info Banner */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Info Banner</h3>
                <Banner
                  variant="info"
                  title="New Feature Available"
                  description="We've added a new feature to help you manage your projects more efficiently. Check it out and let us know what you think!"
                  primaryAction={{
                    label: "Learn More",
                    onClick: () => alert("Primary action clicked!"),
                  }}
                  secondaryAction={{
                    label: "Dismiss",
                    onClick: () => alert("Secondary action clicked!"),
                  }}
                  onClose={() => alert("Banner closed!")}
                />
              </div>

              {/* Success Banner */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Success Banner</h3>
                <Banner
                  variant="success"
                  title="Account Successfully Created"
                  description="Your account has been successfully created and verified. You can now access all premium features."
                  primaryAction={{
                    label: "Get Started",
                    onClick: () => alert("Get started clicked!"),
                  }}
                  onClose={() => alert("Success banner closed!")}
                />
              </div>

              {/* Warning Banner */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Warning Banner</h3>
                <Banner
                  variant="warning"
                  title="Action Required"
                  description="Your subscription will expire in 3 days. Please update your payment information to continue using our services."
                  primaryAction={{
                    label: "Update Payment",
                    onClick: () => alert("Update payment clicked!"),
                  }}
                  secondaryAction={{
                    label: "Learn More",
                    onClick: () => alert("Learn more clicked!"),
                  }}
                  onClose={() => alert("Warning banner closed!")}
                />
              </div>

              {/* Error Banner */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Error Banner</h3>
                <Banner
                  variant="error"
                  title="Connection Error"
                  description="We're having trouble connecting to our servers. Please check your internet connection and try again."
                  primaryAction={{
                    label: "Retry",
                    onClick: () => alert("Retry clicked!"),
                  }}
                />
              </div>

              {/* Color Variants Grid */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Color Variants</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Banner
                    variant="slate"
                    title="Slate"
                    description="Slate variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="brown"
                    title="Brown"
                    description="Brown variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="deepOrange"
                    title="Deep Orange"
                    description="Deep Orange variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="amber"
                    title="Amber"
                    description="Amber variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="yellow"
                    title="Yellow"
                    description="Yellow variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="lime"
                    title="Lime"
                    description="Lime variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="green"
                    title="Green"
                    description="Green variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="lightGreen"
                    title="Light Green"
                    description="Light Green variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="teal"
                    title="Teal"
                    description="Teal variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="blue"
                    title="Blue"
                    description="Blue variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="turquoise"
                    title="Turquoise"
                    description="Turquoise variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="lightBlue"
                    title="Light Blue"
                    description="Light Blue variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="indigo"
                    title="Indigo"
                    description="Indigo variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="deepPurple"
                    title="Deep Purple"
                    description="Deep Purple variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="purple"
                    title="Purple"
                    description="Purple variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="lightPurple"
                    title="Light Purple"
                    description="Light Purple variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="orange"
                    title="Orange"
                    description="Orange variant"
                    onClose={() => {}}
                  />
                  <Banner
                    variant="pink"
                    title="Pink"
                    description="Pink variant"
                    onClose={() => {}}
                  />
                </div>
              </div>

              {/* Banner without icon */}
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Banner without Icon
                </h3>
                <Banner
                  variant="slate"
                  title="Simple Banner"
                  description="This banner doesn't have an icon, showing the flexibility of the component."
                  showIcon={false}
                  primaryAction={{
                    label: "Learn More",
                    onClick: () => alert("Learn more clicked!"),
                  }}
                  onClose={() => alert("Simple banner closed!")}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Card Showcase */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Card Component Showcase</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hub Status</CardTitle>
                <CardDescription>Current Wi‑Fi and online devices</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Connected to HomeWiFi345. All systems nominal.
              </CardContent>
              <CardFooter>
                <Button size="small" variant="outline">Details</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Living Room</CardTitle>
                <CardDescription>4 devices</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center gap-2">
                <Chip>Online</Chip>
                <Chip variant="outline">Auto</Chip>
              </CardContent>
              <CardFooter>
                <Button size="small">Open</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Energy Usage</CardTitle>
                <CardDescription>Today vs yesterday</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Preview placeholder — integrate charts later with Chart components.
              </CardContent>
              <CardFooter>
                <Button size="small" variant="plain">Learn more</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Chip Showcase */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Chip Component Showcase</h2>
          <div className="space-y-6">
            {/* Basic Variants */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Style Variants</h3>
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <Chip variant="solid">Solid</Chip>
                <Chip variant="outline">Outline</Chip>
                <Chip variant="plain">Plain</Chip>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Size Variants</h3>
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <Chip size="small">Small</Chip>
                <Chip size="medium">Medium</Chip>
                <Chip size="large">Large</Chip>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Chips with Icons</h3>
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <Chip
                  variant="solid"
                  leftElement={
                    <div className="w-5 h-5 rounded-full bg-[#EDEFF2] flex items-center justify-center">
                      <span className="text-[#1D2025] text-xs font-bold">A</span>
                    </div>
                  }
                >
                  With Badge
                </Chip>
                <Chip
                  variant="outline"
                  leftElement={
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  }
                >
                  With Icon
                </Chip>
                <Chip
                  variant="plain"
                  leftElement={
                    <div className="w-5 h-5 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500"></div>
                  }
                >
                  With Avatar
                </Chip>
              </div>
            </div>

            {/* Removable */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Removable Chips</h3>
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <Chip removable onRemove={() => alert('Chip removed!')}>Removable</Chip>
                <Chip variant="outline" removable onRemove={() => alert('Chip removed!')}>Outline Removable</Chip>
                <Chip variant="plain" removable onRemove={() => alert('Chip removed!')}>Plain Removable</Chip>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
