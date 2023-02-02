export const tertiaryOptions = {
    'list-clusters': [
        {
            value: 'eks-list-clusters',
            label: 'list the eks clusters.',
            usage: 'aws eks list-clusters',
            nb: 'This command lists the eks clusters in the given default aws profile.',
        },
    ],
    'list-default-vpc': [
        {
            value: 'aws-list-default-vpc',
            label: 'list the default vpc.',
            usage: 'aws ec2 describe-vpcs --filters Name=isDefault,Values=true',
            nb: 'This command lists the default vpc in the given default aws profile.',
        },
    ],
    'query-list-default-vpc': [
        {
            value: 'aws-query-list-default-vpc',
            label: 'query the default vpc.',
            usage: "aws ec2 describe-vpcs --query 'Vpcs[?IsDefault==`true`].VpcId' --output table",
            nb: 'This command queries the default vpc in the given default aws profile. Prints the output in a table format.',
        },
    ],
    'query-list-non-default-vpc': [
        {
            value: 'aws-query-list-non-default-vpc',
            label: 'query the non default vpc.',
            usage: "aws ec2 describe-vpcs --query 'Vpcs[?IsDefault==`false`].VpcId' --output table",
            nb: 'This command queries the non default vpc in the given default aws profile. Prints the output in a table format.',
        },
    ],
};
