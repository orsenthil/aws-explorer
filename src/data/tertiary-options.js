export const tertiaryOptions = {
    'availablity-zones' :[
        {
            value: 'describe-availablity-zones',
            label: 'describe availablity zones',
            usage: "aws ec2 describe-availability-zones --region us-west-2 --query 'AvailabilityZones[*].ZoneName --output text'",
            description: 'Lists the availablity zones for the given region.',
        },
    ],
    'vpc': [
        {
            value: 'aws-list-default-vpc',
            label: 'list the default vpc.',
            usage: 'aws ec2 describe-vpcs --filters Name=isDefault,Values=true',
            nb: 'This command lists the default vpc in the given default aws profile.',
        },
        {
            value: 'aws-query-list-default-vpc',
            label: 'query the default vpc.',
            usage: "aws ec2 describe-vpcs --query 'Vpcs[?IsDefault==`true`].VpcId' --output table",
            nb: 'This command queries the default vpc in the given default aws profile. Prints the output in a table format.',
        },
        {
            value: 'aws-query-list-non-default-vpc',
            label: 'query the non default vpc.',
            usage: "aws ec2 describe-vpcs --query 'Vpcs[?IsDefault==`false`].VpcId' --output table",
            nb: 'This command queries the non default vpc in the given default aws profile. Prints the output in a table format.',
        },
    ],
};
