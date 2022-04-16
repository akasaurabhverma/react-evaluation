import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

export default function Row({ data }) {



    return (
        <div>{data ? data : "Nothing Here"}</div>
    )
}
