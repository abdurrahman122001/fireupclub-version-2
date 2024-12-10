"use client";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import Select from "react-select";
import axios from "axios";

const PaymentForm = () => {
  const [showOccupationField, setShowOccupationField] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm();

  const stepAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const upToDownAnimation = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get("https://innand.com/api/get-payment-plan");
        console.log(response.data); // Adjust as necessary
      } catch (error) {
        console.error("Error fetching payment plans:", error);
      }
    };
    fetchPlans();
  }, []);

  const handleFormSubmit = async (data) => {
    try {
      // Prepare data for submission
      const formData = {
        name: data.name,
        email: data.email,
        plan: selectedPlan,
        bundle: data.bundle,
        price: selectedPrice,
      };

      // Save data and get Stripe URL
      const response = await axios.post("https://innand.com/api/save-data-and-redirect", formData);

      if (response.data.url) {
        // Redirect to Stripe Checkout
        window.location.href = response.data.url;
      } else {
        alert("Error initializing payment. Please try again.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <section className="multiform-section">
      <div className="bg-cover w-100 h-100 section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-10 col-xl-8 col-md-10 mx-auto">
              <div className="section-title mb-2 text-start">
                <h2 className="text-white">Payment Form</h2>
              </div>
              <p className="mb-5" style={{ color: "#dbe0de", fontSize: "18px" }}>
                You're almost there! Complete the final step by filling out the details below.
              </p>
              <form
                className="multi-form-items"
                onSubmit={handleSubmit(handleFormSubmit)}
              >
                <div className="form-group mb-4">
                  <label>Name *</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="form-control"
                    placeholder="Enter your name"
                  />
                  {errors.name && <p className="error-text">{errors.name.message}</p>}
                </div>

                <div className="form-group mb-4">
                  <label>Email *</label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  {errors.email && <p className="error-text">{errors.email.message}</p>}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    variants={stepAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <div className="form-group mb-5">
                      <label>Choose your plan *</label>
                      <Controller
                        name="plan"
                        control={control}
                        rules={{
                          validate: (value) => !!value || "Choose any one plan.",
                        }}
                        render={({ field }) => (
                          <Select
                            {...field}
                            options={[
                              { value: "single", label: "Single Group Access" },
                              { value: "3_group", label: "3 Group Bundles" },
                              { value: "all", label: "All Group Access" },
                            ]}
                            placeholder="Select"
                            value={
                              field.value
                                ? {
                                  value: field.value,
                                  label:
                                    field.value === "single"
                                      ? "Single Group Access"
                                      : field.value === "3_group"
                                        ? "3 Group Bundles"
                                        : "All Group Access",
                                }
                                : null
                            }
                            onChange={(selectedOption) => {
                              field.onChange(selectedOption.value);
                              setSelectedPlan(selectedOption.value);
                              setShowOccupationField(true);
                              setTotalPrice(null);
                            }}
                          />
                        )}
                      />

                      {errors.plan && <p className="error-text">{errors.plan.message}</p>}
                    </div>

                    {showOccupationField && selectedPlan === "single" && (
                      <motion.div
                        className="form-group mb-5"
                        key="single-group"
                        variants={upToDownAnimation}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <label>Single Group Access *</label>
                        <Controller
                          name="bundle"
                          control={control}
                          rules={{
                            validate: (value) => {
                              if (!value) return "Choose Bundle.";
                              return true;
                            },
                          }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              options={[
                                { value: 9.99, label: "Monthly $9.99", plan: "Monthly" },
                                { value: 19.99, label: "Quaterly $19.99", plan: "Quaterly" },
                                { value: 29.99, label: "Biannually $29.99", plan: "Biannually" },
                                { value: 59.99, label: "Annually $59.99", plan: "Annually" },
                              ]}
                              placeholder="Select"
                              value={[
                                { value: 9.99, label: "Monthly $9.99", plan: "Monthly" },
                                { value: 19.99, label: "Quaterly $19.99", plan: "Quaterly" },
                                { value: 29.99, label: "Biannually $29.99", plan: "Biannually" },
                                { value: 59.99, label: "Annually $59.99", plan: "Annually" },
                              ].find((option) => option.value === field.value)}
                              onChange={(selectedOption) => {
                                field.onChange(selectedOption.value);
                                setSelectedPrice(selectedOption.value);
                                setTotalPrice(selectedOption.value);
                              }}
                            />
                          )}
                        />
                        {errors.bundle && <p className="error-text">{errors.bundle.message}</p>}
                      </motion.div>
                    )}

                    {showOccupationField && selectedPlan === "3_group" && (
                      <motion.div
                        className="form-group mb-5"
                        key="three-group"
                        variants={upToDownAnimation}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <label>3 Group Bundles *</label>
                        <Controller
                          name="bundle"
                          control={control}
                          rules={{
                            validate: (value) => {
                              if (!value) return "Choose Bundle.";
                              return true;
                            },
                          }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              options={[
                                { value: "26.99", label: "Monthly $26.99", plan: "Monthly" },
                                { value: "53.99", label: "Quaterly $53.99", plan: "Quaterly" },
                                { value: "89.99", label: "Biannually $89.99", plan: "Biannualy" },
                                { value: "143.99", label: "Annually $143.99", plan: "Annually" },
                              ]}
                              placeholder="Select"
                              value={[
                                { value: "26.99", label: "Monthly $26.99", plan: "Monthly" },
                                { value: "53.99", label: "Quaterly $53.99", plan: "Quaterly" },
                                { value: "89.99", label: "Biannually $89.99", plan: "Biannualy" },
                                { value: "143.99", label: "Annually $143.99", plan: "Annually" },
                              ].find((option) => option.value === field.value)}
                              onChange={(selectedOption) => {
                                field.onChange(selectedOption.value);
                                setSelectedPrice(selectedOption.value);
                                setTotalPrice(selectedOption.value);
                              }}
                            />
                          )}
                        />
                        {errors.bundle && <p className="error-text">{errors.bundle.message}</p>}
                      </motion.div>
                    )}

                    {showOccupationField && selectedPlan === "all" && (
                      <motion.div
                        className="form-group mb-5"
                        key="all-group"
                        variants={upToDownAnimation}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <label>All Group Access *</label>
                        <Controller
                          name="bundle"
                          control={control}
                          rules={{
                            validate: (value) => {
                              if (!value) return "Choose Bundle.";
                              return true;
                            },
                          }}
                          render={({ field }) => (
                            <Select
                              {...field}
                              options={[
                                { value: "49.99", label: "Monthly $49.99", plan: "Monthly" },
                                { value: "119.99", label: "Quaterly $119.99", plan: "Quaterly" },
                                { value: "179.99", label: "Biannually $179.99", lan: "Biannualy" },
                                { value: "239.99", label: "Annually $239.99", plan: "Annually" },
                              ]}
                              placeholder="Select"
                              value={[
                                { value: "49.99", label: "Monthly $49.99", plan: "Monthly" },
                                { value: "119.99", label: "Quaterly $119.99", plan: "Quaterly" },
                                { value: "179.99", label: "Biannually $179.99", lan: "Biannualy" },
                                { value: "239.99", label: "Annually $239.99", plan: "Annually" },
                              ].find((option) => option.value === field.value)}
                              onChange={(selectedOption) => {
                                field.onChange(selectedOption.value);
                                setSelectedPrice(selectedOption.value);
                                setTotalPrice(selectedOption.value);
                              }}
                            />
                          )}
                        />
                        {errors.bundle && <p className="error-text">{errors.bundle.message}</p>}
                      </motion.div>
                    )}
                    {totalPrice && (
                      <div>
                        <h3 style={{ color: "#dbe0de" }}>Selected Plan</h3>
                        <p style={{ color: "#dbe0de", fontSize: "18px" }}>
                          Total: ${totalPrice}
                        </p>
                      </div>
                    )}

                    <button type="submit" className="theme-btn bg-2 mt-4">
                      Pay ${totalPrice || "0"}
                    </button>
                  </motion.div>
                </AnimatePresence>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentForm;
