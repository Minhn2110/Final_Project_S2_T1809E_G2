export const MESSAGE = {
    saveInterchange: `Save interchange successfully!`,
    saveEvent: 'Save Event successfully!',
    deleteEvent: 'Delete Event successfully!',
    unassignMember: 'Unassign household sucessfully!',
    assignGuest: 'Assign as Guest sucessfully!',
    assignHost: 'Assign as Host sucessfully!',
    awayMember: 'Away household sucessfully!',
    updateHost: 'Update host successfully!',
    addGuest: 'Add Guests sucessfully!',
    addHost: 'Add Hosts sucessfully!',
    deleteHost: 'Delete Hosts sucessfully!',
    deleteGuest: 'Delete Guests sucessfully!',
    linkVisitor: 'Link Visitor sucessfully!',
    unlinkVisitor: 'Un-link Visitor sucessfully!',
    allocation: 'Update Allocation Successfully',
    noticeAssignAsHost: {
        hasOldPerson: 'One or more members of this Household are >= 80 years old. Continue marking Household as Host?',
        entireHousehold: 'Entire Household will be assigned as Host. Do you wish to continue?',
        entireHouseholdAsTBA: 'Entire Household will be assigned. Do you wish to continue?',
        entireHouseholdAsGuest: 'Entire Household will be assigned as Guest. Do you wish to continue?',
        stillGuest: 'One or more Household member is assigned as Guest. Do you wish to move entire Household as Host?',
        unableToHost: 'This household is marked as unable to Host.'
    },
    mealAllocation: {
        cancelAllocation: 'Guests allocated to selected Hosts will be un-assigned. Continue?',
        cancelAllocationSuccess: 'Cancel Host Allocation successfully!!',
        cancelAllocationNotice: 'There arwe!!',
        unallocated: 'Unallocate Successfully!!',
        allocateGuests: 'Allocate Guests Successfully!!',
        unallocateGuest: 'Selected Guests will be un-allocated. Continue?',
        checkGuestHasVisitor: 'There are Visitor(s) linked to selected Host Household(s). These will not be un-allocated. Continue?',
        autoAllocate: 'Auto-Allocate Successfully!!',
        unAutoAllocate: 'Un-Allocate Successfully!!',
        publishLiveUpdate: 'Publish Live Update Successfully!!'
    },
    locationSetup: {
        updateHH: 'Update Household Successfully !!',
        addHelper: 'Add Helper Successfully !!',
        removeHelper: 'Remove Helper Successfully !!',
        confirmRemoveHelper: 'Selected households will be removed. Are you sure you want to proceed?',
        updateSpecialNeed: 'Update Special Needs Successfully !!'
    },
    exclusionList: {
        linkTogether: 'Link Household Together Successfully !!',
        unlinkTogether: 'Un-link Household Successfully !!'
    },
    confirmCarer: {
        confirm: 'Successfully !!'
    },
    autoAllocation: {
        unassignGuest: 'Auto-allocation will allocate Un-assigned Guests only',
        allGuestExcept: 'Auto-allocation will allocate all guests except those that have already been manually assigned',
        allGuest: 'Auto-allocation will allocate every guest including those previously assigned manually and by the system',
        confirmUnAllocate: {
            allGuestExcept: 'All allocated Guests except those manually allocated will be un-assigned. Continue?',
            allGuest: 'Every allocated Guest (including manually allocated) will be un-assigned. Continue?'
        },

    },
    publishType: {
        mealSetupHost: 'Meal-setup Host',
        mealSetupHostSuccess: 'Publish Event / Notify Host(s) successfully!',
        mealSetupGuest: 'Meal-setup Guest',
        mealSetupGuestSuccess: 'Publish Event to Guest(s) successfully!',
        mealAllocationHost: 'Meal-allocation Host',
        mealAllocationHostSuccess: 'Publish Allocation / Notify Host(s) successfully!',
        mealAllocationGuest: 'Meal-allocation Guest',
        mealAllocationGuestSuccess: 'Publish Event to Guest(s) successfully!',
    }
};
