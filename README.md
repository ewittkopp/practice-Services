# PracticeServices

## Overview
**PracticeServices** is a starter Angular project designed to help students learn how to use **Angular Services** to manage shared data and application logic.

The application allows users to manage tasks by creating, viewing, updating status, and deleting them. The project demonstrates how services centralize data management and how components interact with shared state.

---

## Features
The application supports the following functionality:

- Create new tasks
- View a list of tasks
- Update the status of tasks
- Delete tasks

When the application first loads, **three sample tasks** are displayed. Each task includes:

- A **dropdown menu** to update the task status
- A **delete button** to remove a task

---

## Application Components

The project contains the following components:

### 1. AppComponent (Parent Component)
- Root component of the application
- Hosts the other components

### 2. NewTaskComponent
- Provides the form to create new tasks

### 3. TaskComponent
- Displays individual tasks
- Allows users to update task status
- Allows users to delete tasks

---

## Component Communication

Data communication between parent and child components is implemented using:

- **Signal-based `input()`**
- **Signal-based `output()`**

These functions allow components to exchange data and events in a reactive and structured way.

---

## Changes to Implement

1. Create an interface named `TaskData` to represent task objects.
2. Create a Service - TaskService
    - Move the task array to TaskService and convert this to a signal
    - Implement methods to add new tasks, updateStatus, and delete tasks.
3. Inject TaskService into NewTask and Task Components to access tasks and it's methods.

