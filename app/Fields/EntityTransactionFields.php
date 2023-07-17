<?php

namespace App\Fields;

use App\Classes\Hook;
use App\Models\TransactionAccount;
use App\Models\Role;
use App\Models\Transaction;
use App\Services\FieldsService;
use App\Services\Helper;

class EntityTransactionFields extends FieldsService
{
    protected static $identifier = 'ns.salary-transactions';

    public function __construct( Transaction $transaction = null )
    {
        $this->fields = Hook::filter( 'ns-direct-transactions-fields', [
            [
                'label' => __( 'Name' ),
                'description' => __( 'Describe the direct transactions.' ),
                'validation' => 'required|min:5',
                'name' => 'name',
                'type' => 'text',
            ], [
                'label' => __( 'Activated' ),
                'validation' => 'required|min:5',
                'name' => 'active',
                'description' => __( 'If set to yes, the transaction will be eligible for an execution.' ),
                'options' => Helper::kvToJsOptions([ false => __( 'No' ), true => __( 'Yes' )]),
                'type' => 'switch',
            ], [
                'label' => __( 'Category' ),
                'description' => __( 'Assign the transaction to a category.' ),
                'validation' => 'required',
                'name' => 'category_id',
                'options' => Helper::toJsOptions( TransactionAccount::get(), [ 'id', 'name' ]),
                'type' => 'select',
            ], [
                'label' => __( 'Value' ),
                'description' => __( 'set the value of the transactions.' ),
                'validation' => 'required',
                'name' => 'value',
                'type' => 'number',
            ], [
                'label' => __( 'User Group' ),
                'description' => __( 'The transactions will be multipled by the number of user having that role.' ),
                'validation' => 'required',
                'name' => 'group_id',
                'options' => Helper::toJsOptions( Role::get()->map( function( $role ) {
                    $role->name .= ' (' . $role->users()->count() . ')';

                    return $role;
                }), [ 'id', 'name' ]),
                'type' => 'select',
            ], [
                'label' => __( 'Description' ),
                'description' => __( 'Further details on the transaction.' ),
                'name' => 'description',
                'type' => 'textarea',
            ], [
                'label' => __( 'Recurring' ),
                'validation' => 'required|min:5',
                'name' => 'recurring',
                'type' => 'hidden',
            ], [
                'label' => __( 'type' ),
                'validation' => 'required|min:5',
                'name' => 'type',
                'type' => 'hidden',
            ],
        ]);

        if ( $transaction instanceof Transaction ) {
            foreach ( $this->fields as $key => $field ) {
                if ( isset( $transaction->{$field[ 'name' ]} ) ) {
                    if ( is_bool( $transaction->{$field[ 'name' ]} ) ) {
                        $this->fields[$key][ 'value' ] = (int) $transaction->{$field[ 'name' ]};
                    } else {
                        $this->fields[$key][ 'value' ] = $transaction->{$field[ 'name' ]};
                    }
                }
            }
        }
    }

    public function get()
    {
        return $this->fields;
    }
}
