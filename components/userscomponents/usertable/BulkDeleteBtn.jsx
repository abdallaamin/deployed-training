import * as React from 'react';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import { DeleteBulkUsers } from '../../../lib/userrequestBE'
import DeleteUsersModal from './DeleteUsersModal';


//<DeleteUsersModal userId={UsersIds} onDeleteUser={onDeleteUser} />
//<DeleteUsersModal userId={UsersIds} onDeleteUser={onDeleteUser} />
export default function BulkDeleteBtn({ UsersIds, onDeleteUser, btnFlag }) {


    const handleDelete = async () => {
        if (UsersIds) {
            try {
                const response = await DeleteBulkUsers(UsersIds);
                console.log('UsersIds', UsersIds);
                // You can add code here to handle the success of the deactivation
                console.log('API response:', response);
            } catch (error) {
                // You can add code here to handle errors
                console.error('API error:', error);
            }
        }
    };



    return (
        <div>
            <Button
                disabled={!btnFlag}
                color="primary"
                sx={{ paddingLeft: '10px' }}
                variant="contained"
                onClick={handleDelete}
            >
                Delete
            </Button>
        </div>
    );
}