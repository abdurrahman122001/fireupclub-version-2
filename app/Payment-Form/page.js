"use client";
import { useEffect, useState } from 'react';
// import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import Select from "react-select";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import countries from "world-countries";
import axios from "axios";


const PaymentForm = () => {
    const [showOccupationField, setShowOccupationField] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null); // For selected plan
    const [totalPrice, setTotalPrice] = useState(null); // For dynamic total price
    const [selectedPlanLabel, setSelectedPlanLabel] = useState(null);
    const stepAnimation = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
      };
      const upToDownAnimation = {
        hidden: { opacity: 0, y: -50 }, 
        visible: { opacity: 1, y: 0 }, // Move to normal position
        exit: { opacity: 0, y: -50 }, // Optional: Exit back up
      };
      const fetchGoalsByCategory = async (categoryValue) => {
        setLoadingGoals(true);
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/goals-by-category`, {
            params: { category_value: categoryValue },
          });
          setFilteredGoals(response.data.goals.map((goal) => ({
            value: goal.goal,
            label: goal.goal,
          })));
        } catch (error) {
          console.error("Error fetching goals by category:", error);
        } finally {
          setLoadingGoals(false);
        }
      };
      useEffect(() => {
        const fetchIndustries = async () => {
            try {
              const response = await axios.get("http://127.0.0.1:8000/api/industries");
              const formattedIndustries = response.data.map(industry => ({
                value: industry.value,
                label: industry.name
              }));
              setIndustries(formattedIndustries);
            } catch (error) {
              console.error("Error fetching industries:", error);
            }
          };
          fetchIndustries();

        const fetchFinancialGoals = async () => {
          try {
            const response = await axios.get("http://127.0.0.1:8000/api/financialGoals");
            setGoalCategories(response.data.goalCategories.map((category) => ({
              value: category.category_value,
              label: category.category,
            })));
            // setGoals(response.data.goals);
          } catch (error) {
            console.error("Error fetching financial goals:", error);
          }
        };
        fetchFinancialGoals();
      
      
      
      }, []);
      
    return (

        <section className="multiform-section">
          <div className="bg-cover w-100 h-100 section-padding">
            <div className="container">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-10 col-xl-8 col-md-10 mx-auto">
                    <div className="section-title mb-2 text-start">
                      <h2 className=" text-white">
                        Payment Form
                      </h2>
                    </div>
                    <p className="mb-5" style={{color:'#dbe0de', fontSize:'18px'}}>
                        You're almost there! Complete the final step by filling out the details below.
                    </p>
                    <form className="multi-form-items">
                        <AnimatePresence mode="wait">
                            <motion.div
                            // className="step step-2"
                            // key="step-2"
                            variants={stepAnimation}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                            <div className="row justify-content-between">
                                <div className="col-12">
                                    <div className="form-group mb-5">
                                    <label>Choose your plan? *</label>
                                    <Controller
                                        name="plan"
                                        control={control}
                                        rules={{
                                        validate: (value) => {
                                            if (!value) return "Choose any one plan.";
                                            return true;
                                        },
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
                                            value={[
                                            { value: "single", label: "Single Group Access" },
                                            { value: "3_group", label: "3 Group Bundles" },
                                            { value: "all", label: "All Group Access" },
                                            ].find((option) => option.value === field.value)}
                                            onChange={(selectedOption) => {
                                            field.onChange(selectedOption.value);
                                            setSelectedPlan(selectedOption.value); // Set selected plan
                                            setShowOccupationField(true); // Show the occupation field
                                            setTotalPrice(null); // Reset total price on plan change
                                            }}
                                        />
                                        )}
                                    />
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
                                                    { value: 9.99, label: "Monthly $9.99", plan:"Monthly" },
                                                    { value: 19.99, label: "Quaterly $19.99", plan:"Quaterly" },
                                                    { value: 29.99, label: "Biannually $29.99", plan:"Biannually" },
                                                    { value: 59.99, label: "Annually $59.99", plan:"Annually" },
                                                ]}
                                                placeholder="Select"
                                                value={[
                                                    { value: 9.99, label: "Monthly $9.99", plan:"Monthly" },
                                                    { value: 19.99, label: "Quaterly $19.99", plan:"Quaterly" },
                                                    { value: 29.99, label: "Biannually $29.99", plan:"Biannually" },
                                                    { value: 59.99, label: "Annually $59.99", plan:"Annually" },
                                                ].find((option) => option.value === field.value)}
                                                onChange={(selectedOption) => {
                                                    field.onChange(selectedOption.value);
                                                    setSelectedPrice(selectedOption.value); // Set selected price
                                                    setTotalPrice(selectedOption.value); // Update total price
                                                    setSelectedPlanLabel(selectedOption.plan);
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
                                                { value: "26.99", label: "Monthly $26.99", plan:"Monthly"},
                                                { value: "53.99", label: "Quaterly $53.99", plan:"Quaterly" },
                                                { value: "89.99", label: "Biannually $89.99", plan:"Biannualy" },
                                                { value: "143.99", label: "Annually $143.99", plan:"Annually" },
                                            ]}
                                            placeholder="Select"
                                            value={[
                                                { value: "26.99", label: "Monthly $26.99" ,  plan:"Monthly"},
                                                { value: "53.99", label: "Quaterly $53.99", plan:"Quaterly" },
                                                { value: "89.99", label: "Biannually $89.99", plan:"Biannualy" },
                                                { value: "143.99", label: "Annually $143.99", plan:"Annually" },
                                            ].find((option) => option.value === field.value)}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption.value);
                                                setSelectedPrice(selectedOption.value); // Set selected price
                                                setTotalPrice(selectedOption.value); // Update total price
                                                setSelectedPlanLabel(selectedOption.plan);
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
                                                { value: "49.99", label: "Monthly $49.99",  plan:"Monthly" },
                                                { value: "119.99", label: "Quaterly $119.99", plan:"Quaterly" },
                                                { value: "179.99", label: "Biannually $179.99", lan:"Biannualy" },
                                                { value: "239.99", label: "Annually $239.99", plan:"Annually" },
                                            ]}
                                            placeholder="Select"
                                            value={[
                                                { value: "49.99", label: "Monthly $49.99",  plan:"Monthly" },
                                                { value: "119.99", label: "Quaterly $119.99", plan:"Quaterly" },
                                                { value: "179.99", label: "Biannually $179.99", lan:"Biannualy" },
                                                { value: "239.99", label: "Annually $239.99", plan:"Annually" },
                                            ].find((option) => option.value === field.value)}
                                            onChange={(selectedOption) => {
                                                field.onChange(selectedOption.value);
                                                setSelectedPrice(selectedOption.value); // Set selected price
                                                setTotalPrice(selectedOption.value); // Update total price
                                                setSelectedPlanLabel(selectedOption.plan);
                                            }}
                                            />
                                        )}
                                        />
                                        {errors.bundle && <p className="error-text">{errors.bundle.message}</p>}
                                    </motion.div>
                                    )}

                                    <motion.div
                                        className="form-group mb-5"
                                        key={`total-${selectedPlanLabel}-${totalPrice}`}
                                        variants={upToDownAnimation}
                                        initial="hidden"
                                        animate="visible"
                                        transition={{ duration: 0.6, ease: "easeInOut" }}
                                    >
                                    {totalPrice && (
                                        <div>
                                            <h3 style={{ color: "#dbe0de" }}>{selectedPlanLabel} Price</h3>
                                            <label style={{ color: "#dbe0de", fontSize: "18px" }}>
                                            Total: ${totalPrice}
                                            </label>
                                        </div>
                                        )}
                                    </motion.div>
                                    <button
                                    type="submit"
                                    className="theme-btn bg-2"
                                    >
                                    Submit <i className="fa fa-long-arrow-right"></i>
                                    </button>
                                </div>
                            </div>

                            </motion.div>
                        </AnimatePresence>
                    </form>

                  </div>
                </div>
            </div>
          </div>
        </section>
      );
}

export default PaymentForm;