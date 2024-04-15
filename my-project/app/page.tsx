"use client";
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { Avatar, ShellBar, ThemeProvider } from '@ui5/webcomponents-react';
import {
  Input,
  SuggestionGroupItem,
  SuggestionItem,
} from "@ui5/webcomponents-react";
import "@ui5/webcomponents/dist/features/InputSuggestions.js";

export default function Page() {
  return (
    <ThemeProvider>
      <ShellBar
        logo={
          <img
            src="https://raw.githubusercontent.com/SAP/ui5-webcomponents-react/main/assets/ui5-logo.svg"
            alt={'UI5 Web Components for React logo'}
          />
        }
        primaryTitle="UI5 Web Components for React Template"
        profile={<Avatar icon={employeeIcon} />}
      />
      {/* Add your code here */}
      <Input
            placeholder="type anything to show suggestions"
            showSuggestions
            style={{
              width: "400px",
            }}
            type="Text"
            valueState="None"
          >
            <SuggestionGroupItem text="A Group" />
            <SuggestionItem
              additionalText="USA"
              description="My Description"
              icon="globe"
              text="United States"
            />
            <SuggestionItem icon="globe" iconEnd text="Bulgaria" />
            <SuggestionGroupItem text="Another Group Items" />
            <SuggestionItem icon="globe" text="Argentina" />
            <SuggestionItem icon="globe" text="Germany" />
            <SuggestionItem icon="globe" text="Iceland" />
            <SuggestionItem icon="globe" text="Moldova" />
          </Input>
    </ThemeProvider>
  );
}
