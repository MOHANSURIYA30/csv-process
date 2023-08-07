module.exports = {
    SUCCESS_RESPONSE: { error_code: 0, error_message: 'Success' },
    SERVER_ERROR: { error_code: 90, error_message: 'Something went wrong' },
      
    UPLOAD:{error_code: 0, error_message: 'Uploaded Successfully ' },
    UPLOAD_FILE:{error_code:422, error_message: 'Please Upload File'},
    ACCOUNT: {
        CREATED: { error_code: 0, error_message: 'Account created successfully' },
        UPDATED: { error_code: 0, error_message: 'Account updated successfully' },
        DELETED: { error_code: 0, error_message: 'Account deleted successfully' }
    },

    USER: {
        CREATED: { error_code: 0, error_message: 'User created successfully' },
        UPDATED: { error_code: 0, error_message: 'User updated successfully' },
        DELETED: { error_code: 0, error_message: 'User deleted successfully' }
    },

    POLICY: {
        CREATED: { error_code: 0, error_message: 'Policy created successfully' },
        UPDATED: { error_code: 0, error_message: 'Policy updated successfully' },
        DELETED: { error_code: 0, error_message: 'Policy deleted successfully' }
    },
}