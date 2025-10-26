import { Button } from "@/components/ui/button";

const EmailSignupSection = () => {
  return (
    <section className="bg-luxury-white py-24 md:py-32">
      <div className="mx-auto flex max-w-luxury flex-col items-center px-8 text-center">
        <h2 className="text-sm font-light uppercase tracking-uppercase text-gray-700">
          Latest from Tiffany
        </h2>
        <form className="mt-12 flex w-full max-w-2xl flex-col gap-4 sm:flex-row sm:items-center">
          <label htmlFor="ui-email-signup" className="sr-only">
            Email address
          </label>
          <input
            id="ui-email-signup"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            className="w-full flex-1 border border-gray-200 bg-white px-6 py-4 text-base font-light tracking-luxury text-gray-700 placeholder:text-gray-400 transition-colors duration-250 ease-out focus:border-gray-400 focus:outline-none"
          />
          <Button
            type="submit"
            variant="ctaPrimary"
            className="w-full sm:w-auto"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
};

export default EmailSignupSection;
